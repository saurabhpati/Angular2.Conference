import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';

export const appRoutes: Routes = [
    { path:'events', component: EventsListComponent },
    { path:'events/new', component: CreateEventComponent },
    { path:'events/:id', component: EventDetailsComponent },
    { path:'', redirectTo: '/events', pathMatch: 'full' }
]