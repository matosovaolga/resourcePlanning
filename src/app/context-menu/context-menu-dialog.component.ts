import {Component, Inject, OnInit, Output, EventEmitter} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef, MdDialog} from '@angular/material';
import {ProjectsDataShareService} from '../shared/services/projects-data-share.service';
import {SocketClientService} from '../shared/socket-client.service';
import {ConfirmComponent} from '../confirm-modal/confirm-modal.component';
import {formatDateByParam} from '../header/calendar/utils/date.util';

import * as moment from 'moment';

interface IProjects {
    [id: number]: {
        id: number,
        name: string
    }
}

@Component({
    selector: 'context-menu-dialog',
    templateUrl: './popup-dialog/context-menu-dialog.component.html',

})

export class ContextMenuComponent implements OnInit {
    public planModel;
    public startPlan;
    public endPlan;
    @Output() dateInput = new EventEmitter<string>();
    public showPastNav: boolean = false;
    public copy;
    public adminRole;

    constructor(
        public dialog: MdDialog,
        public dialogRef: MdDialogRef<ContextMenuComponent>,
        @Inject(MD_DIALOG_DATA) public data: any,
        public socket: SocketClientService,
        private dataShare: ProjectsDataShareService,
    ) {
        this.adminRole = localStorage.getItem('admin');
        this.planModel = this.data.plan;
        this.startPlan = this.onTitleChange(this.planModel.start_time);
        this.endPlan = this.onTitleChange(this.planModel.end_time);
        let div  = document.createElement('div');
        this.dataShare.errorDelete().subscribe((data) => {
            div.className = "alert alert-danger successMsg";
            div.innerHTML = "Error";
        });
        this.copy = this.dataShare.planCopy;
    }

    ngOnInit() {}

    onTitleChange(value) {
        let dateStr = formatDateByParam(value, 'DD.MM.YYYY', 'X');
        return dateStr;
    }
    deletePlan() {
        let confirm: MdDialogRef<ConfirmComponent>;

        confirm = this.dialog.open(ConfirmComponent, {
            height: '170px',
            width: '360px'
        });

        this.dialogRef.close();
        confirm.afterClosed().subscribe(result => {
            if (confirm) {
                this.dataShare.planDelete({id: this.planModel.id});
            }
        });
    }

    pastPlan() {
        let userId = this.planModel.user_id;
        delete this.copy['id'];
        this.dataShare.emitPlanCreate({
            ...this.copy,
            user_id: Number(userId),
            planning_updated: Number(moment().format('X'))
        });
        this.dialogRef.close();
    }

    collapsePlan() {
        let collapseDay = Number(formatDateByParam(this.data.clickDate, 'X', 'YYYY-MM-DD'));
        if(this.planModel.end_time == this.planModel.start_time) {return;}
        let newCollapseDay;
        
        if (this.planModel.end_time == collapseDay) {
            let temp = collapseDay;
            collapseDay = Number(moment(formatDateByParam(collapseDay, 'YYYY-MM-DD', 'X')).add(-1, 'day').format('X'));
            newCollapseDay = temp;
        }else{
            newCollapseDay = moment(formatDateByParam(collapseDay, 'YYYY-MM-DD', 'X')).add(1, 'day').format('X');
        }

        let newPlan = Object.assign({}, this.planModel);
        delete newPlan['id'];
        this.dataShare.emitPlanCreate({
            ...newPlan,
            start_time: Number(newCollapseDay),
            planning_updated: Number(moment().format('X'))
        });

        this.dataShare.emitPlanUpdate({
            ...this.planModel,
            end_time: collapseDay,
            planning_updated: Number(moment().format('X'))
        });
        this.dialogRef.close();
    }

    copyPlan(value) {
        this.dataShare.setCopyPlan(value);
        this.copy = value;
    }
}