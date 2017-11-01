import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import {SocketClientService} from '../socket-client.service';

@Injectable()
export class ProjectsDataShareService {
    private subject = new Subject<any>();
    private planDeleteObj = new Subject<any>();
    public planCopy;
    
    constructor(private socketService: SocketClientService) {}

    emitPlanCreate (plan: object) {
        this.socketService.emit('plan/create', plan).subscribe(
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
    emitPlanUpdate (plan: object) {
        this.socketService.emit('plan/update', plan).subscribe(
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
    
    setCopyPlan(value) {
        this.planCopy = value;
    }

    getPlan(): Observable<any> {
       return  this.subject.asObservable();
    }
    
    getCopyPlan(): Observable<any> {
       return  this.planCopy.asObservable();
    }
    
    
    planDelete(id) {
         this.socketService.emit('plan/delete', id).subscribe(
            (data) => {
                this.planDeleteObj.next(data);
            },
            (error) => {
                console.log('Error',error);
            },
            () => {
                console.log('complete');
            }
        );
    }
    
    errorDelete(): Observable<any>{
         return  this.planDeleteObj.asObservable();
    }
    
}
