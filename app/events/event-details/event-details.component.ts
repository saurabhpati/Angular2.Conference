import { Component, OnInit } from '@angular/core';
import { EventsListService } from '../shared/events.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from "../index";

@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styleUrls: ['app/events/event-details/event-details.component.css']
})

export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addSessionMode: boolean;
    filterBy: string;
    sortBy: string;

    constructor(private eventsService: EventsListService, private route: ActivatedRoute) {
        this.filterBy = 'all';
        this.sortBy = 'votes';
    }

    ngOnInit(): void {
        this.route.data.forEach((data) => {
            this.event = data['event'];
            this.addSessionMode = false;
        });
    }

    createNewSession(): void {
        this.addSessionMode = true;
    }

    addNewSession(session: ISession): void {
        session.id = this.event.sessions.length + 1;
        this.event.sessions.push(session);
        //this.eventsService.updateEventOnSessionAddition(this.event);
        this.eventsService.addEvent(this.event).subscribe();
        this.addSessionMode = false;
    }

    cancelCreateNewSession(): void {
        this.addSessionMode = false;
    }
}