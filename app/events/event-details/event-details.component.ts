import { Component } from '@angular/core';
import { EventsListService } from '../shared/events.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from "../index";

@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styleUrls: ['app/events/event-details/event-details.component.css']
})

export class EventDetailsComponent { 
    event: IEvent;
    addSessionMode: boolean;
    filterBy: string;
    sortBy: string;
  
    constructor(private eventsService: EventsListService, private route: ActivatedRoute) {
        this.route.params.forEach((param: Params)=>{
            this.event = this.eventsService.getEvent(+param['id']);
            this.addSessionMode = false;
        });
        this.filterBy = 'all';
        this.sortBy = 'votes';
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