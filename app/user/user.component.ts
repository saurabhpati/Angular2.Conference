import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from './user.auth.service';

@Component({
    templateUrl: 'app/user/user.component.html'
})

export class UserProfileComponent implements OnInit {

    profileForm: FormGroup;

    constructor(private authService: UserAuthService, private router: Router) {

    }

    ngOnInit(): void {
        let firstName = new FormControl(this.authService.currentUser.firstName);
        let lastName = new FormControl(this.authService.currentUser.lastName);
        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName
        });
    }

    saveProfile(formValues): void {
        this.authService.updateUser(formValues.firstName, formValues.lastName);
        this.router.navigate(['/events']);
    }

    cancel(): void {
        this.router.navigate(['/events']);
    }
}