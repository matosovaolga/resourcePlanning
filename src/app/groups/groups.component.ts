import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {GroupsService} from './service/groups.service';
import {IGroupsList} from '../shared/interfaces/groupsList.interface';

@Component({
    selector: 'group-name',
    templateUrl: './groups.component.html',
})
export class GroupsComponent implements OnInit {
    public userGroups: IGroupsList;
    public groupName: string;
    @Input() groupId: any;
    @Output() onClick = new EventEmitter<boolean>();

    public show: boolean;
    constructor(
        private groupsService: GroupsService
    ) {}

    ngOnInit() {
        this.userGroups = this.groupsService.groups;

        if (this.groupId == 'null') this.groupName = 'Unknown';
        Object.keys(this.userGroups).forEach(key => {
            if (this.userGroups[key].id === Number(this.groupId)) {
                this.groupName = this.userGroups[key].name;
            }
        });
    }
}