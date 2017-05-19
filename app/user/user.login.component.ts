import { Component, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { UserAuthService } from './user.auth.service';
import { IToastr, TOKEN_TOASTR } from "../events/index";

@Component({
    templateUrl: 'app/user/user.login.component.html',
    styleUrls: ['app/user/user.login.component.css']
})

export class UserLoginComponent {

    isInvalidLogin: boolean;

    constructor(
        private authService: UserAuthService, 
        private router: Router,
        @Inject(TOKEN_TOASTR) private toastr: IToastr) {
        
    }

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password).subscribe(response=> {
            if (!response) {
                this.isInvalidLogin = true;
                this.toastr.error('Invalid login');
            } else {
                this.toastr.success('Welcome' + this.authService.currentUser.firstName);
                this.router.navigate(['/events']);
            }
        });
    }

    cancel() {
        this.router.navigate(['/events']);
    }
}