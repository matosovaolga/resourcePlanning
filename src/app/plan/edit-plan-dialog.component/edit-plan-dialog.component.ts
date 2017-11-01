import {Component, OnInit, Inject, Output, EventEmitter} from '@angular/core';
import {ProjectClass} from '../../create-project-popup/project.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProjectsService} from '../../create-project-popup/popup-api.service';
import {IUser} from '../../create-project-popup/user.interface';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {ProjectsDataShareService} from '../../shared/services/projects-data-share.service';
import {SocketClientService} from '../../shared/socket-client.service';
import {formatDateByParam} from '../../header/calendar/utils/date.util';
import * as moment from 'moment/moment';

interface IProjects {
    [id: number]: {
        id: number,
        name: string
    }
}

@Component({
    selector: 'edit-plan-dialog',
    templateUrl: './popup-dialog/edit-popup-dialog.component.html',
    styleUrls: ['../../create-project-popup/popup-dialog/create-project-popup-dialog.component.css'],
    providers: [

        {provide: 'IProject', useValue: ProjectClass}
    ]
})
export class EditPlanComponent implements OnInit {

    private projects;
    filteredProjects: Observable<string[]>;
    planModel;
    private keypresValues = '';
    editPlan: FormGroup;
    public usrData: IUser;
    connection;
    choosePlan: FormControl;
    @Output() dateInput = new EventEmitter<string>();

    constructor(
        private dataShare: ProjectsDataShareService,
        public dialogRef: MdDialogRef<EditPlanComponent>,
        @Inject(MD_DIALOG_DATA)
        public data: any,
        public socket: SocketClientService,
        public projectsService: ProjectsService
    ) {

        let planStart = formatDateByParam(this.data.start_time, 'YYYY-MM-DD', 'X');
        let planEnd = formatDateByParam(this.data.end_time, 'YYYY-MM-DD', 'X');
        this.usrData = this.data.user;

        this.planModel = {
            start_time: new Date(planStart),
            end_time: new Date(planEnd),
            approved: true,
            percent: this.data.percent,
            project_id: this.data.project_id

        }
        planEnd = formatDateByParam(planEnd, 'X', 'YYYY-MM-DD');

        this.choosePlan = new FormControl({
            id: this.data.project_id,
            name: this.data.project
        });

    }

    ngOnInit() {
        this.projects = this.projectsService.list;
        let div  = document.createElement('div');
        this.connection = this.dataShare.getPlan().subscribe((data) => {

            if (data.errors) {
                div.className = "alert alert-danger successMsg";
                div.innerHTML = "Error";
            } else {
                div.className = "alert alert-success successMsg";
                div.innerHTML = "Plan is changed";
            }

            document.body.appendChild(div);
                setTimeout((data)=> {
                    div.remove();
                }, 5000);
        });
        this.filteredProjects = this.choosePlan.valueChanges
            .startWith(null)
            .map(val => val ? this.filter(val) : this.projects.slice());
    }
    filter(val: string): string[] {
        if (val.toLowerCase) {
            return this.projects.filter(project =>
                project.name.toLowerCase().indexOf(val.toLowerCase()) === 0);
        } else {
            return this.projects.filter(project =>
                project.name.toLowerCase().indexOf(val) === 0);
        }
    }
    displayFn(project) {
        // I want to get the full object and display the name
        if (!project) return '';
        return project.name;
    }
    onTitleChange() {
        let dateStr = moment(this.planModel.end_time).format('YYYY,MM,DD').split(",").map(function (item) {
            return parseInt(item, 10);
        });
    }

    changeStart() {
        if (this.planModel.start_time.getTime() > this.planModel.end_time.getTime()) {
            this.planModel.end_time = this.planModel.start_time;
        }
    }

    changeEnd() {
        if (this.planModel.start_time.getTime() > this.planModel.end_time.getTime()) {
            this.planModel.start_time = this.planModel.end_time;
        }
    }
    selectProject(event, item) {
        if (event.source.selected) {
            this.planModel.project_id = item.id;
        }

    }
    keyPress(event: any) {
           const pattern = /^(100|[0-9]|[0-9][0-9])$/;

        let inputChar = String.fromCharCode(event.charCode);
        if(event.keyCode != 8){
            this.keypresValues += inputChar;
        }else {
            this.keypresValues = this.keypresValues.slice(0, -1);
        }
        let pass = pattern.test(this.keypresValues);

        if (event.keyCode != 8 && !pattern.test(this.keypresValues)) {
            this.keypresValues = this.keypresValues.slice(0, -1);
            event.preventDefault();
        }
    }

    ngOnDestroy() {
        this.connection.unsubscribe();
    }


    saveUpdate(): void {
        this.dialogRef.close();
        if (!this.planModel.approved) this.planModel.approved = 0;

        this.planModel.end_time = Number(formatDateByParam(this.planModel.end_time, 'X'));
        this.planModel.start_time = Number(formatDateByParam(this.planModel.start_time, 'X'));

        this.dataShare.emitPlanUpdate({
            ...this.planModel,
            id: this.data.id,
            planning_updated: Number(moment().format('X'))
        });
        this.reset();
    }
    reset(): void {
        for (const value in this.planModel) {
            if (this.planModel.hasOwnProperty(value)) {
                this.planModel[value] = null;
            }
        }
    }
}