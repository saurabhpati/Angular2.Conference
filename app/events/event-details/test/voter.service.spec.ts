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

    describe('deleteUserVote', () => {
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

        it('Should call http.delete correctly', () => {
            let session = {
                id: 6,
                voters: ['joe', 'jonathan']
            };

            mockHttp.delete.and.returnValue(Observable.of(false));
            voterService.deleteUserVote(3, <ISession>session, 'joe');

            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe');
        });
    });

    describe('addUserVote', () => {
        it('should add a voter', () => {
            let session = {
                id: 6,
                voters: ['jonathan']
            };

            mockHttp.post.and.returnValue(Observable.of(false));
            voterService.addUserVote(3, <ISession>session, 'joe');

            expect(session.voters.length).toBe(2);
            expect(session.voters[1]).toBe('joe');
        });

        it('should add http.post correctly', () => {
            let session = {
                id: 6,
                voters: ['jonathan']
            };

            mockHttp.post.and.returnValue(Observable.of(false));
            voterService.addUserVote(3, <ISession>session, 'joe');

            expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe', {}, jasmine.any(Object));
        });
    });


})