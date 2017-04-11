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
import { appRoutes } from './routes';

@NgModule({
    imports: [BrowserModule,
    RouterModule.forRoot(appRoutes)],
    declarations: [EventsAppComponent, 
    EventsListComponent, 
    EventsThumbNailComponent,
    NavBarComponent,
    EventDetailsComponent],
    bootstrap: [EventsAppComponent],
    providers: [EventsListService, ToastrService]
})
  
export class EventsAppModule {

}