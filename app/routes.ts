import { Routes } from '@angular/router';
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    EventRouteActivator,
    EventsListResolver,
    CreateSessionComponent
} from './events/index';

export const appRoutes: Routes = [
    { path:'events', component: EventsListComponent, resolve: {events: EventsListResolver} },
    { path:'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path:'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path:'events/session/new', component: CreateSessionComponent },
    { path:'404', component: Error404Component },
    { path:'', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserProfileModule' }
]