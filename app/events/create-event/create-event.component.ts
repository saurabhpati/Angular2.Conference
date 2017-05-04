import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventsListService } from "../shared/index";

@Component({
    templateUrl: 'app/events/create-event/create-event.component.html',
    styleUrls: ['app/events/create-event/create-event.component.css']
})

export class CreateEventComponent {
    
    isDirtyState: boolean;

    constructor(private router: Router, private eventsListService: EventsListService) {
        this.isDirtyState = true;
    }

    saveEvent(formValues): void {
        this.eventsListService.addEvent(formValues)
        this.isDirtyState = false;
        this.router.navigate(['/events']);
    }

    cancel(): void {
        this.router.navigate(['/events']);
    }
}