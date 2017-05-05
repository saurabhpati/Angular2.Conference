import { Component, Input } from '@angular/core';
import { ISession } from "../index";

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html',
    styleUrls: ['app/events/event-details/session-list.component.css']
})

export class SessionListComponent {
    @Input() sessions : ISession[];
}