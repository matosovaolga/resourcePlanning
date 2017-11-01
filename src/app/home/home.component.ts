import {Component, OnInit} from '@angular/core';
import {SocketClientService} from '../shared/socket-client.service';
import {ProjectsService} from '../create-project-popup/popup-api.service';
import {GroupsService} from '../groups/service/groups.service';
import {CalendarDateShareService} from '../shared/services/calendar-date-share.service';
import {formatDateByParam} from '../header/calendar/utils/date.util';
import {PlanService} from '../plan/service/plan.service';

interface IProjects {
    [id: number]: {
        id: number,
        name: string
    }
}
@Component({
    selector: 'home-app',
    templateUrl: 'home.component.html',
})

export class HomeComponent implements OnInit {
    public start: number;
    public end: number;
     public loading: boolean = true;
    constructor(
        private planService: PlanService,
        private socket: SocketClientService,
        public projectsService: ProjectsService,
        private groupsService: GroupsService,
        private calendarShare: CalendarDateShareService
    ) {
        let token = localStorage.getItem('token');

        this.socket.connect(token);
        this.planService.getUserBusy().distinctUntilChanged().subscribe((data) => {
            this.loading = false;
            this.socket.emitPlan(data);
        });

        this.projectsService.getProjects().distinctUntilChanged().subscribe((data: IProjects) => {
            this.projectsService.emitList(data);
        });

        this.groupsService.getGroupsData().distinctUntilChanged().subscribe((response) => {
            groupsService.groups = response;
        });
    }

    ngOnInit() {

        this.groupsService.emitGroupsData();

        this.calendarShare.getDatePeriod().subscribe((resp) => {
            if (!resp) {return }
            this.start = Number(formatDateByParam(resp.date.start, 'X'));
            this.end = Number(formatDateByParam(resp.date.end, 'X'));

            this.planService.emitUsersBusy({
                time_from: this.start,
                time_to: this.end
            });

            this.projectsService.emitProjectData();
        });
    }
}