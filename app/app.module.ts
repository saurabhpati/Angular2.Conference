import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbNailComponent } from './events/events-thumbnail.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [EventsAppComponent, EventsListComponent, EventsThumbNailComponent],
    bootstrap: [EventsAppComponent]
})

export class EventsAppModule {

}