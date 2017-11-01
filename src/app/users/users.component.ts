import {Component, OnInit} from '@angular/core';
import {UsersService} from './service/users.service';
import {CalendarDateShareService} from '../shared/services/calendar-date-share.service';
import {Users} from '../shared/interfaces/usersList.interface';
import {ProjectsService} from '../create-project-popup/popup-api.service';
import {formatDateByParam} from '../header/calendar/utils/date.util';
import {GetLevels} from '../_pipes/getLevel.pipe';
import {Object2ArrayPipe} from '../_pipes/object2Array.pipe';
import {SocketClientService} from '../shared/socket-client.service';

import _ from 'lodash';

@Component({
    selector: 'app-users-list',
    templateUrl: './users.component.html',
    providers: [
        GetLevels,
        Object2ArrayPipe
    ]
})

/** Class representing a Users Component */
export class UsersComponent {

    /** The width of the date field */
    public fieldWidth: number;
    /** The list of all users */
    public users: Users;
    /** Position for cursor. */
    cursorPosition: number;
    leave = false;
    public start: number;
    public end: number;
    public maxheight = 34;
    public adminRole: string;
    private projectsList: any[];
    private plan: {};
    /**
   * Create a UserComponent.
   * @param usersService - The service for work with users.
   * @param groupsService - The service for work with groups.
   * @param calendarShare - The service for data sharing with Calendar data.
   * @param cdRef - For fix bug with Observer;
   */
    constructor(
        private socket: SocketClientService,
        private usersService: UsersService,
        private calendarShare: CalendarDateShareService,
        private projectData: ProjectsService,
        private getLevels: GetLevels,
        private object2Array: Object2ArrayPipe,
    ) {
        this.adminRole = localStorage.getItem('admin');

        if (!usersService.users) {
            /* Get users list, if list is empty */
            usersService.getUsersData().distinctUntilChanged().subscribe((resp) => {
                if (!resp) {return }
                usersService.users = resp;  
            });
        }

        this.calendarShare.getDatePeriod().distinctUntilChanged().subscribe((resp) => {
            if (!resp) {return }
            this.start = Number(formatDateByParam(resp.date.start, 'X'));
            this.end = Number(formatDateByParam(resp.date.end, 'X'));
            this.getPlanList();
        });
        this.projectData.getList().distinctUntilChanged().subscribe(projectList => {
            this.projectsList = projectList;
            this.updatePlans();
        });
    }

    getPlanList() {
        this.socket.getList().distinctUntilChanged().subscribe(plan => {
            this.plan = plan;
            this.updatePlans();
        });
    }

    updatePlans() {
        if (_.isEmpty(this.projectsList)) return;

        _.forEach(this.usersService.users, (users) => {
            users.plans = [];
        });

        _.filter(this.plan, (planObj) => {
            let scope = this;
            planObj['level'] = 0;
            _.filter(this.usersService.users, (usr) => {
                let top = 0,
                    level = 0,
                    maxLevel = 0,
                    maxheight = 0,
                    i = 0;
                if (planObj.user_id == usr.id) {
                    planObj['project'] = _.filter(this.projectsList, (project) => project.id == planObj.project_id)[0]['name'];
                    if(planObj.start_time > planObj.end_time) return;
                    usr.plans.push(planObj);
                }
                if (usr.plans.length > 0) {
                    _.forEach(usr.plans, function (project) {
                        if (!(project.end_time < scope.start || project.start_time > scope.end)) {

                            for (let j = 0; j <= level; j++) {
                                let sameLevel = scope.getLevels.transform(scope.object2Array.transform(usr.plans), j);
                                if (sameLevel.length) {
                                    _.forEach(sameLevel, (searchproject) => {
                                        if ((searchproject.end_time >= project.start_time) && (project.end_time >= searchproject.start_time) && level == j && (searchproject.id !== project.id)) {
                                            level += 1;
                                            maxLevel < level ? maxLevel = level : '';
                                        }
                                    });
                                }
                            }

                            top = 34 * level;
                            project['top'] = top;
                            project['level'] = level;
                            maxheight = (maxLevel + 1) * 34;
                            usr['maxheight'] = maxheight;
                            level = 0;
                            i += 1;
                        }
                    });
                } else {
                    usr['maxheight'] = 34;
                }
            });
        });
        this.users = this.usersService.users;
        
    }

    ngOnInit() {
        /**
         * Subscribe date field width.
         * */
        this.calendarShare.getFieldWidth()
            .distinctUntilChanged()
            .subscribe(response => {
                this.fieldWidth = response;
            });
        this.usersService.emitUsersData();
    }

    /** Change cursor line position.
    * @param e = Mouse event
    * */
    moveCursorLine(e): void {
        this.leave = false;
        this.cursorPosition = e.clientX - 20;
    }

    mouseLeave(): void {
        this.leave = true;
    }
}
