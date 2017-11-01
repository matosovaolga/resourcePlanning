import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {SocketClientService} from '../../shared/socket-client.service';
import {Users} from '../../shared/interfaces/usersList.interface';

/** Class UserService */
@Injectable()
export class UsersService {

    /** API URL
     * @type { string }
     * */
    public users: Users;
    private subject = new Subject<Users>();

    constructor(private socket: SocketClientService) {
        this.socket.on('user');
    }

    emitUsersData() {
        if (!this.users) {
            this.socket.emit('user').subscribe(
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
    }

    getUsersData(): Observable<Users> {
        return this.subject.asObservable();
    }
}
