import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ISession } from "../index";


@Injectable()

export class VoterService {

    constructor(private http: Http) {

    }

    deleteUserVote(eventId: number, session: ISession, voterName: string): void {
        session.voters = session.voters.filter(voter => voter !== voterName);

        this.http.delete(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`).subscribe();
    }

    addUserVote(eventId: number, session: ISession, voterName: string): void {
        session.voters.push(voterName);

        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({
            headers: headers
        });
        this.http.post(url, {}, options).subscribe();
    }

    hasUserVoted(session: ISession, voterName: string): boolean {
        return session.voters.includes(voterName);
    }
}