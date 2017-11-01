import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';

import {SocketClientService} from '../../shared/socket-client.service';

interface IDraw {
    start: number,
    end: number
}

/** Class UserService */
@Injectable()
export class PlanService {

    private subject = new Subject<any>();
    private planSubject = new Subject<any>();
    constructor(private socket: SocketClientService) {}

    emitUsersBusy(time: object) {
        this.socket.emit('plan', time).subscribe(
            (data) => {
                this.subject.next(data);
            },
            (error) => {
                console.log('Error', error);
            },
            () => {
                //                console.log('complete');
            }
        );
    }


    emitPlanUpdate(planObj: object) {
        this.socket.emit('plan/update', planObj).subscribe(
            (data) => {
                this.subject.next(data);
            },
            (error) => {
                console.log('Error', error);
            },
            () => {
                //                console.log('complete');
            }
        );
    }

    /**
    * Get all projects
    * */
    getUserBusy(): Observable<any> {
        return this.subject.asObservable();
    }

    /* Get singl plan info*/
    getPlan(): Observable<any> {
        return this.planSubject.asObservable();
    }
}
