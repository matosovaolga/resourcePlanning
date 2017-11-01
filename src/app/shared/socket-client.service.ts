import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import * as io from 'socket.io-client';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class SocketClientService {
    public subject = new Subject<any>();
    private socket: any;
    private host: string = location.hostname + (location.port ? ':' + location.port : '');
    private token: string;
    public planList = new Subject<any>();

    constructor(private router: Router) {
        if (!this.token) {
            this.token = localStorage.getItem('token');
        }

        this.socket = io(this.host, {'query': 'token=' + this.token});
        this.socket.on("connect", () => {this.connected()});
        this.socket.on("disconnect", () => this.disconnected());
        this.socket.on("error", (error) => {
            if (error) {
                if (error.type) {
                    this.router.navigate(['/login']);
                }
            }
        });

        this.socket.on('project', (data) => {});
        this.socket.on('group', (data) => {});
        this.socket.on('plan', (data) => {
            this.planList.next(data);
        });
    }

    emitPlan(value) {
        this.planList.next(value);
    }

    getList(): Observable<any> {
        return this.planList.asObservable();
    }

    connect(token) {
        this.token = token;
        this.socket.connect();
    }

    disconnect() {
        this.socket.disconnect();
    }

    emit(chanel: string, data?: any) {
        return new Observable<any>(observer => {
            this.socket.emit(chanel, data, (data) => {
                if (data) {
                    // Success
                    observer.next(data);
                } else {
                    // error
                    observer.error(data);
                }
                observer.complete();
            });
        });
    }

    on(event_name) {
        return new Observable<any>(observer => {
            this.socket.off(event_name);
            this.socket.on(event_name, (data) => {
                observer.next(data);
            });
        });
    }

    private connected(): void {
        console.log('Connected');
    }

    private disconnected() {
        console.log('Disconnected');
    }
}

