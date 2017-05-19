import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { EventsListService } from './shared/events.service';

@Injectable()

export class EventResolver implements Resolve<any>{

    constructor(private eventListService: EventsListService ) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.eventListService.getEvent(+route.params['id']);
    }
}