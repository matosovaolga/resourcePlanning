import {Component, OnInit, Inject, Output, OnChanges, EventEmitter, ElementRef} from '@angular/core';
import {ProjectClass} from '../project.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProjectsService} from '../popup-api.service';
import {IUser} from '../user.interface';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {MdDialogRef, MD_DIALOG_DATA, MdSelectModule, MdAutocomplete, MatAutocomplete, MdOptionSelectionChange} from '@angular/material';
import {ProjectsDataShareService} from '../../shared/services/projects-data-share.service';
import {SocketClientService} from '../../shared/socket-client.service';
import {formatDateByParam} from '../../header/calendar/utils/date.util';
import * as moment from 'moment';

interface IProjects {
    [id: number]: {
        id: number,
        name: string
    }
}

@Component({
    selector: 'app-create-project-popup-dialog',
    templateUrl: '../popup-dialog/create-project-popup-dialog.component.html',
    styleUrls: ['../popup-dialog/create-project-popup-dialog.component.css'],
    providers: [
        {provide: 'IProject', useValue: ProjectClass}
    ]
})
/** Class CreateProjectPopupDialogComponent. */
export class CreateProjectPopupDialogComponent implements OnInit {

    /** Projects array. */
    private projects;
    filteredProjects: Observable<string[]>;
    planModel;
    private keypresValues = '';
    createPlan: FormGroup;
    public usrData: IUser;
    connection;
    choosePlan: FormControl = new FormControl;
    @Output() dateInput = new EventEmitter<string>();
    /**
     * Create CreateProjectPopupDialogComponent.
     * */
    constructor(
        private dataShare: ProjectsDataShareService,
        public dialogRef: MdDialogRef<CreateProjectPopupDialogComponent>,
        @Inject(MD_DIALOG_DATA)
        public data,
        public socket: SocketClientService,
        public projectsService: ProjectsService,
        private elementRef:ElementRef
    ) {

        if (this.data.user) {
            this.usrData = this.data.user;
        } else {
            this.usrData = this.data;
        }

        if (this.data['startDay']) {

            this.planModel = {
                start_time: new Date(this.data['startDay']),
                end_time: new Date(this.data['endDay']),
                approved: true
            };
        } else {
            this.planModel = {
                start_time: new Date(),
                end_time: new Date(),
                approved: true
            }
        }
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
                div.innerHTML = "Plan is created";
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

    ngOnChanges() {
    
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
    /**
     * Create new Project.
     * */

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

    createProject(): void {
        this.dialogRef.close();
        if (!this.planModel.approved) this.planModel.approved = 0;
        this.planModel.end_time = Number(formatDateByParam(this.planModel.end_time, 'X'));
        this.planModel.start_time = Number(formatDateByParam(this.planModel.start_time, 'X'));

        this.dataShare.emitPlanCreate({
            ...this.planModel,
            user_id: Number(this.usrData.id),
            planning_updated: Number(moment().format('X'))
        });
        this.reset();
    }

    /**
     * Reset planModel form.
     * */
    reset(): void {
        for (const value in this.planModel) {
            if (this.planModel.hasOwnProperty(value)) {
                this.planModel[value] = null;
            }
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
}
