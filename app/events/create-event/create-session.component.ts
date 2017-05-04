import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { restrictedWords } from "../index";

@Component({
    templateUrl: 'app/events/create-event/create-session.component.html',
    styleUrls: ['app/events/create-event/create-session.component.css']
})

export class CreateSessionComponent implements OnInit {

    sessionForm: FormGroup;
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

    constructor(private router: Router) {
        
    }

    ngOnInit(): void {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.maxLength(400), restrictedWords(['foo','bar'])]);
        this.sessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }

    saveSession(sessionFormValue): void {
        console.log(sessionFormValue);
    }

    validateDropdown(control: FormControl): boolean {
        if(!control) {
            return false;
        }

        return control.value === "" && control.touched;
    }

    cancel(): void {
        this.router.navigate(['/events']);
    }
}