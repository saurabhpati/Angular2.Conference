import { VoterService } from '../voter.service';
import { ISession } from '../../shared/events.model';
import { Observable } from "rxjs/Rx";

describe('Voter Service', () => {

    let voterService: VoterService;
    let mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        voterService = new VoterService(mockHttp);
    });

    it('Should delete a voter', () => {
        let session = {
            id: 6,
            voters: ['joe', 'jonathan']
        };
        
        mockHttp.delete.and.returnValue(Observable.of(false));
        voterService.deleteUserVote(3, <ISession>session, 'joe');

        expect(session.voters.length).toBe(1);
        expect(session.voters[0]).toBe('jonathan');
    });
})