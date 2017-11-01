import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
import {SocketClientService} from '../shared/socket-client.service';

/** ClassProjectsService. */
@Injectable()
export class ProjectsService {
    /** API URL. */
    private subject = new Subject<any>();
    private projectList = new Subject<any>();
    public list ;
    constructor(
        private socket: SocketClientService
    ){}

    emitList(value) {
        this.list = value;
        this.projectList.next(value);
    }

    /**
     * Get list all projects.
     * */
    emitProjectData() {
        this.socket.emit('project').subscribe(
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

    getList() : Observable<any> {
        return this.projectList.asObservable();
    }

    getProjects(): Observable<any> {
        return this.subject.asObservable();
    }
}
