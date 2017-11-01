import {Component, OnInit} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {AuthenticationService} from '../../_services/index';

@Component({
    selector: 'general-header',
    templateUrl: './general-header.component.html'
})

export class GeneralHeaderComponent implements OnInit {
    codeItLogo = '../assets/images/logo.png';
    returnUrl: string;
    isLogin: boolean;
    menulist: boolean = false;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
      ) {

        /* check if user logged already */
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (localStorage.getItem('token')) {
                    this.isLogin = true;
                } else {
                    this.isLogin = false;
                }
            }
        });
    }

    ngOnInit() {}

    logout() {
        this.authenticationService.logout();
    }
    toogleLegendList(): void {
        this.menulist = !this.menulist;
    }
}
