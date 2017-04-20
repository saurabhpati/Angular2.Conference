import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './events/error/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventsListResolver } from './events/events-list-resolver.service';

export const appRoutes: Routes = [
    { path:'events', component: EventsListComponent, resolve: {events: EventsListResolver} },
    { path:'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path:'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path:'404', component: Error404Component },
    { path:'', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserProfileModule' }
]