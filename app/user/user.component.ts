import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from './user.auth.service';

@Component({
    templateUrl: 'app/user/user.component.html',
    styleUrls: ['app/user/user.component.css']
})

export class UserProfileComponent implements OnInit {

    private profileForm: FormGroup;
    private firstName: FormControl;
    private lastName: FormControl;

    constructor(private authService: UserAuthService, private router: Router) {

    }

    ngOnInit(): void {
        this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*'), Validators.minLength(2)]);
        this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*'), Validators.minLength(2)]);
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }

    saveProfile(formValues): void {
        this.authService.updateUser(formValues.firstName, formValues.lastName);
        this.router.navigate(['/events']);
    }

    cancel(): void {
        this.router.navigate(['/events']);
    }

    // Returns true, if form control is valid or untouched, false, otherwise
    validateFormControl(formControl: FormControl): boolean {
        return formControl.valid || formControl.untouched;
    }
}