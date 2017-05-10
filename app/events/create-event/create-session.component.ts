import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { restrictedWords, ISession } from "../index";
import { TOKEN_TOASTR, IToastr } from "../shared/index";

@Component({
    selector: 'create-session',
    templateUrl: 'app/events/create-event/create-session.component.html',
    styleUrls: ['app/events/create-event/create-session.component.css']
})

export class CreateSessionComponent implements OnInit {
    
    @Output() saveNewSession = new EventEmitter();
    @Output() cancelCreateSession = new EventEmitter();
    sessionForm: FormGroup;
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

    constructor(private router: Router, @Inject(TOKEN_TOASTR) private toastrService: IToastr) {
        
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
        
        let session: ISession = {
            id: undefined,
            name: sessionFormValue.name,
            presenter: sessionFormValue.presenter,
            duration: sessionFormValue.duration,
            level: sessionFormValue.level,
            abstract: sessionFormValue.abstract,
            voters: []
        };
        this.saveNewSession.emit(session);
        this.toastrService.success(session.name + ' Session created');
    }

    validateDropdown(control: FormControl): boolean {
        if(!control) {
            return false;
        }

        return control.value === "" && control.touched;
    }

    cancel(): void {
        this.cancelCreateSession.emit();
        this.toastrService.info('Session Creation was cancelled, feel free to come back');
    }
}