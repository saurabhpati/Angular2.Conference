import './rxjs-extentions';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { appRoutes } from './routes';
import {
    EventsListComponent,
    EventsThumbNailComponent,
    EventsListService,
    TOKEN_TOASTR,
    IToastr,
    TOKEN_JQUERY,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    EventResolver,
    EventsListResolver,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpVoteSessionComponent,
    VoterService,
    LocationValidator
} from './events/index';
import { UserAuthService } from './user/user.auth.service';

declare let toastr : IToastr;
declare let jQuery: Object;

@NgModule({
    imports: [BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule],

    declarations: [EventsAppComponent, 
    EventsListComponent, 
    EventsThumbNailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpVoteSessionComponent,
    LocationValidator],

    bootstrap: [EventsAppComponent],
    
    providers: [EventsListService, 
    {
        provide: TOKEN_TOASTR, 
        useValue: toastr 
    },
    {
        provide: TOKEN_JQUERY, 
        useValue: jQuery 
    },
    EventResolver, 
    { 
        provide: 'canDeactivateCreateEvent', 
        useValue: checkDirtyState 
    },
    EventsListResolver,
    UserAuthService,
    VoterService]
})

export class EventsAppModule {

}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirtyState) {
        return window.confirm('You are trying to cancel unsaved event, do you wish to continue?');
    } 
    
    return true;
}