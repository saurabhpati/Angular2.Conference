import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { EventsListService, TOKEN_TOASTR, IToastr } from "../shared/index";

@Component({
    templateUrl: 'app/events/create-event/create-event.component.html',
    styleUrls: ['app/events/create-event/create-event.component.css']
})

export class CreateEventComponent {

    isDirtyState: boolean;

    constructor(private router: Router,
        private eventsListService: EventsListService,
        @Inject(TOKEN_TOASTR) private toastrService: IToastr) {
        this.isDirtyState = true;
    }

    saveEvent(formValues): void {
        this.eventsListService.addEvent(formValues).subscribe(event => {
            this.isDirtyState = false;
            this.toastrService.success(formValues.name + ' Event created, you can now add sessions to this event');
            this.router.navigate(['/events']);
        });
    }

    cancel(): void {
        this.toastrService.info('New Event Creation was cancelled, feel free to come back');
        this.router.navigate(['/events']);
    }
}