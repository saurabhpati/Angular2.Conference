import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbNailComponent } from './events/events-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { EventsListService } from './events/shared/events.service';
import { ToastrService } from './events/shared/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './events/error/404.component';
import { appRoutes } from './routes';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';

@NgModule({
    imports: [BrowserModule,
    RouterModule.forRoot(appRoutes)],
    declarations: [EventsAppComponent, 
    EventsListComponent, 
    EventsThumbNailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component],
    bootstrap: [EventsAppComponent],
    providers: [EventsListService, ToastrService, EventRouteActivator, { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }]
})

export class EventsAppModule {

}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirtyState) {
        return window.confirm('You are trying to cancel unsaved event, do you wish to continue?');
    } 
    
    return false;
}