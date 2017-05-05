import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventsListService, ToastrService } from "../shared/index";

@Component({
    templateUrl: 'app/events/create-event/create-event.component.html',
    styleUrls: ['app/events/create-event/create-event.component.css']
})

export class CreateEventComponent {
    
    isDirtyState: boolean;

    constructor(private router: Router, 
    private eventsListService: EventsListService, 
    private toastrService: ToastrService) {
        this.isDirtyState = true;
    }

    saveEvent(formValues): void {
        this.eventsListService.addEvent(formValues)
        this.isDirtyState = false;
        this.router.navigate(['/events']);
        this.toastrService.success(formValues.name + ' Event created, you can now add sessions to this event');
    }

    cancel(): void {
        this.router.navigate(['/events']);
        this.toastrService.info('New Event Creation was cancelled, feel free to come back');
    }
}