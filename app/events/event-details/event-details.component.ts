import { Component } from '@angular/core';
import { EventsListService } from '../shared/events.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styleUrls: ['app/events/event-details/event-details.component.css']
})

export class EventDetailsComponent { 
    event;
    constructor(private eventsService: EventsListService, private route: ActivatedRoute) {
        this.event = this.eventsService.getEvent(+this.route.snapshot.params['id']);
    }
}