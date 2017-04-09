import { Component, Input } from '@angular/core';

@Component({
    selector: 'events-thumbnail',
    templateUrl: 'app/events/events-thumbnail.component.html'
})

export class EventsThumbNailComponent {
    @Input() event: any;
}