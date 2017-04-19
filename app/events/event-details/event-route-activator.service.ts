import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventsListService } from '../shared/events.service';
import { Observable } from 'rxjs';

@Injectable()

export class EventRouteActivator implements CanActivate {
        
    constructor(private eventsListService : EventsListService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
            const isEventExists = !!this.eventsListService.getEvent(+route.params['id']);

            if (!isEventExists) {
                this.router.navigate(['/404']);
            }
            
            return isEventExists;
        }

}