import { Observable } from 'rxjs/Rx';
import { EditPlanComponent } from '../edit-plan-dialog.component/edit-plan-dialog.component';
import { MdDialogRef, MdDialog} from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class EditDialogsService {

    constructor(private dialog: MdDialog) { }

    public editPlan(data: object): Observable<boolean> {

        let dialogRef: MdDialogRef<EditPlanComponent>;
        dialogRef = this.dialog.open(EditPlanComponent, { data: data,});

        return dialogRef.afterClosed();
    }
}