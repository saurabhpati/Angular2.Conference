import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { appRoutes } from './routes';
import {
    EventsListComponent,
    EventsThumbNailComponent,
    EventsListService,
    ToastrService,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    EventRouteActivator,
    EventsListResolver,
    CreateSessionComponent,
    SessionListComponent
} from './events/index';
import { UserAuthService } from './user/user.auth.service';

@NgModule({
    imports: [BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule],

    declarations: [EventsAppComponent, 
    EventsListComponent, 
    EventsThumbNailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent],

    bootstrap: [EventsAppComponent],
    
    providers: [EventsListService, 
    ToastrService, 
    EventRouteActivator, 
    { 
        provide: 'canDeactivateCreateEvent', 
        useValue: checkDirtyState 
    },
    EventsListResolver,
    UserAuthService]
})

export class EventsAppModule {

}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirtyState) {
        return window.confirm('You are trying to cancel unsaved event, do you wish to continue?');
    } 
    
    return true;
}