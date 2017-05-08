import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ISession } from "../index";

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html',
    styleUrls: ['app/events/event-details/session-list.component.css']
})

export class SessionListComponent implements OnChanges {

    @Input() sessions: ISession[];
    @Input() filterBy: string;
    visibleSessions: ISession[];

    ngOnChanges(changes: SimpleChanges): void {

        if (!this.sessions) {
            return;
        }

        this.visibleSessions = this.filterBy === 'all' ? this.sessions :
            this.sessions.filter(session => session.level === this.filterBy);
    }
}