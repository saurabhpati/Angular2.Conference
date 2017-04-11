import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbNailComponent } from './events/events-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { EventsListService } from './events/shared/events.service';
import { ToastrService } from './events/shared/toastr.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [EventsAppComponent, 
    EventsListComponent, 
    EventsThumbNailComponent,
    NavBarComponent],
    bootstrap: [EventsAppComponent],
    providers: [EventsListService, ToastrService]
})
  
export class EventsAppModule {

}