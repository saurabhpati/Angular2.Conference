import { Component, Input } from '@angular/core';

@Component({
    selector: 'events-thumbnail',
    templateUrl: 'app/events/events-thumbnail.component.html',
    styleUrls: ['app/events/events-thumbnail.component.css']
})

export class EventsThumbNailComponent {
    @Input() event: any;

    setEarlyTimeClass () {
        return this.event.time === '8:00 am' ? ['green', 'bold'] : [];
    }
}