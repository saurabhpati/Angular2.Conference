import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './events/error/404.component';

export const appRoutes: Routes = [
    { path:'events', component: EventsListComponent },
    { path:'events/new', component: CreateEventComponent },
    { path:'events/:id', component: EventDetailsComponent },
    { path:'404', component: Error404Component },
    { path:'', redirectTo: '/events', pathMatch: 'full' }
]