import { Component, OnInit } from '@angular/core';
import { UserAuthService } from "./user/user.auth.service";
import { Http } from "@angular/http";

@Component({
    selector: 'events-app',
    template: '<nav-bar></nav-bar><router-outlet></router-outlet>'
})

export class EventsAppComponent implements OnInit {

    constructor(private http: Http, private authService: UserAuthService) {

    }

    ngOnInit(): void {
        this.authService.checkAuthenticationStatus()
    }
}