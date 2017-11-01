import {Component, Input} from '@angular/core';
import {CreateProjectPopupDialogComponent} from '../popup-dialog/create-project-popup-dialog.component';
import {IUser} from '../user.interface';
import {MdDialog} from '@angular/material';
import {SocketClientService} from '../../shared/socket-client.service';

@Component({
    selector: 'app-create-project-popup',
    template: `<span (click)="openDialog(user)" class="addNewProj">&nbsp;</span>`
})

export class CreateProjectPopupComponent {

    @Input() user: IUser;

    constructor(
        public dialog: MdDialog,
        private socket: SocketClientService
    ) {}

    openDialog(): void {
        this.dialog.open(CreateProjectPopupDialogComponent, {
            width: '360px',
            data: this.user
        });
    }
}
