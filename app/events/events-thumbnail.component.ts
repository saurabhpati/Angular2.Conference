import { Component, Input } from '@angular/core';
import { IEvent } from "./index";

@Component({
    selector: 'events-thumbnail',
    templateUrl: 'app/events/events-thumbnail.component.html',
    styleUrls: ['app/events/events-thumbnail.component.css']
})

export class EventsThumbNailComponent {
    @Input() event: IEvent;

    setEarlyTimeClass () {
        return this.event.time === '8:00 am' ? ['green', 'bold'] : [];
    }
}