import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbNailComponent } from './events/events-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [EventsAppComponent, 
    EventsListComponent, 
    EventsThumbNailComponent,
    NavBarComponent],
    bootstrap: [EventsAppComponent]
})
  
export class EventsAppModule {

}