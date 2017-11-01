import {Observable} from 'rxjs/Rx';
import {ContextMenuComponent} from './../context-menu-dialog.component';
import {MdDialogRef, MdDialog} from '@angular/material';
import {Injectable} from '@angular/core';

@Injectable()
export class ContextDialogsService {

    constructor(private dialog: MdDialog) {}

    public deletePlanDialog(data: object, date?: any): Observable<boolean> {

        let dialogRef: MdDialogRef<ContextMenuComponent>;

        dialogRef = this.dialog.open(ContextMenuComponent, {
            width: '220px',
            data: {
                plan : data,
                clickDate: date
            },
        });

        return dialogRef.afterClosed();
    }
}