import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { EventsListService } from './shared/events.service';

@Injectable()

export class EventsListResolver implements Resolve<any> {

    constructor(private eventsListService: EventsListService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.eventsListService.getEvents();
    }

}