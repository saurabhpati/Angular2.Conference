import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from './user.auth.service';

@Component({
    templateUrl: 'app/user/user.login.component.html'
})

export class UserLoginComponent {

    constructor(private authService: UserAuthService, private router: Router) {

    }

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password);
        this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events']);
    }
}