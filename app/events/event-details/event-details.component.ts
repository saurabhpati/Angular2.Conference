import { Component } from '@angular/core';
import { EventsListService } from '../shared/events.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from "../index";

@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styleUrls: ['app/events/event-details/event-details.component.css']
})

export class EventDetailsComponent { 
    event: IEvent;
    addSessionMode: boolean;
    filterBy: string;

    constructor(private eventsService: EventsListService, private route: ActivatedRoute) {
        this.event = this.eventsService.getEvent(+this.route.snapshot.params['id']);
        this.filterBy = 'all';
    }

    createNewSession(): void {
        this.addSessionMode = true;
    }

    addNewSession(session: ISession): void {
        session.id = this.event.sessions.length + 1;
        this.event.sessions.push(session);
        this.eventsService.updateEventOnSessionAddition(this.event);
        this.addSessionMode = false;
    }

    cancelCreateNewSession(): void {
        this.addSessionMode = false;
    }
}