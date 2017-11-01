import {Injectable} from '@angular/core';
import {IGroupsList} from '../../shared/interfaces/groupsList.interface';
import {Observer} from 'rxjs/Observer';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import {SocketClientService} from '../../shared/socket-client.service';

/** Class the GroupService*/
@Injectable()
export class GroupsService {
    /** The groups list with users */
    public groups: any;
    private subject = new Subject<any>();
    constructor( private socket: SocketClientService) {
         
    }

    /** Get formatted groups list
     * @param users - Unformatted list.
     * */
 
    emitGroupsData () {
        if(!this.groups){
            this.socket.emit('group').subscribe(
                (data) => {
                    this.subject.next(data);
                },
                (error) => {
                    console.log('Error',error);
                },
                () => {
    //                console.log('complete');
                }
            );
        }
    }

    getGroupsData (): Observable<any> {
        return this.subject.asObservable();
    }
}
