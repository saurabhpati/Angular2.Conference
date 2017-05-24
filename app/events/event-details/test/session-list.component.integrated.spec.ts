import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import {
    SessionListComponent,
    UpVoteSessionComponent,
    VoterService
} from '../index';
import {
    ISession,
    CollapsibleWellComponent,
    DurationPipe
} from '../../index';
import { UserAuthService } from '../../../user/user.auth.service';

describe('SessionListComponent', () => {

    let fixture: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debugEl: DebugElement;

    beforeEach(async(() => {

        let mockAuthService = {
            isAuthenticated: () => true,
            currentUser: {
                firstName: 'Saurabh'
            }
        },
        mockVoterService = {
            hasUserVoted: (session: ISession) => true
        }

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent,
                UpVoteSessionComponent,
                CollapsibleWellComponent,
                DurationPipe
            ],
            providers: [
                { provide: VoterService, useValue: mockVoterService },
                { provide: UserAuthService, useValue: mockAuthService },
            ],
            schemas: []
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        debugEl = fixture.debugElement;
    });

    describe('ngOnChanges', () => {
        it('should render the correct title for the session', () => {
            let changes = {
                filterBy: 'all'
            };

            component.sessions = <ISession[]>[{
                id: 1,
                name: 'Session on Angular 2',
                presenter: 'Saurabh Pati',
                abstract: 'This is an amazingly awesome session',
                duration: 2,
                level: 'Beginner',
                voters: ['Saurabh']
            }];
            component.filterBy = 'all';
            component.eventId = 6;

            component.ngOnChanges(changes);
            fixture.detectChanges();
            expect(element.querySelector('[well-title]').textContent).toContain('Angular');
        });
    });
});