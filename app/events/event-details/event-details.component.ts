import { Component } from '@angular/core';
import { EventsListService } from '../shared/events.service'

@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styleUrls: ['app/events/event-details/event-details.component.css']
})

export class EventDetailsComponent { 
    event;
    constructor(private eventsService: EventsListService) {
        this.event = this.eventsService.getEvent(1)
    }
}