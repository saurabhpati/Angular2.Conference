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
    @Input() sortBy: string;
    visibleSessions: ISession[];

    ngOnChanges(changes: any): void {

        if (!this.sessions) {
            return;
        }

        if (changes.filterBy) {
            this.filterBySessionLevel();
        }

        if (changes.sortBy) {
            this.sortSessions();
        }

    }

    filterBySessionLevel(): void {
        this.visibleSessions = this.filterBy === 'all' ? this.sessions :
            this.sessions.filter(session => session.level === this.filterBy);
    }

    sortSessions(): void {

        switch (this.sortBy) {
            case 'name':
                this.visibleSessions.sort(nameComparer);
                break;
        
            case 'votes':
                this.visibleSessions.sort(votesComparer);
                break;
            
            default:
                throw "Invalid sort value";
                
        }
    }
}

function nameComparer(session1: ISession, session2: ISession): number {
    return session1.name > session2.name ? 1 : session1.name === session2.name ? 0 : -1
}

function votesComparer(session1: ISession, session2: ISession): number {
    return session2.voters.length - session1.voters.length;
}