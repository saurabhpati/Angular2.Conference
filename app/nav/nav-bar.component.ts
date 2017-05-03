import { Component } from '@angular/core';
import { UserAuthService } from "../user/user.auth.service";

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/nav-bar.component.html',
    styleUrls: ['app/nav/nav-bar.component.css']
})

export class NavBarComponent {
    constructor(private authService: UserAuthService ) {
        /* auth service is injected here because it is needed in the html template to evaluate 
        whether the user is authenticated and if yes, then to access the user's first name*/
    }
}