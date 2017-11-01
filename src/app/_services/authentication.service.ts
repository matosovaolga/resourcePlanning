import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Router, NavigationStart} from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

    constructor(
        private http: Http,
        private router: Router,
    ) {}

    login(username: string, password: string) {

        return this.http.post('/login', {email: username, pass: password})
            .map((response: Response) => {
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('token', user.token);
                    if(user.is_admin == true) {
                        localStorage.setItem('admin', 'true');
                    }
                    else {
                        localStorage.removeItem('admin');
                    }
                }
            });
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
}

