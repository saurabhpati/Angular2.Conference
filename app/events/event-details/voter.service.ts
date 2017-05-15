import { Injectable } from '@angular/core';
import { ISession } from "../index";

@Injectable()

export class VoterService {

    deleteUserVote(session: ISession, voterName: string): void {
        session.voters = session.voters.filter(voter => voter !== voterName);
    }

    addUserVote(session: ISession, voterName: string): void {
        session.voters.push(voterName);
    }

    hasUserVoted(session: ISession, voterName: string): boolean {
        return session.voters.includes(voterName);
    }
}