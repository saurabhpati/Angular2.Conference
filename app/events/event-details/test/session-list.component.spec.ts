import { SessionListComponent } from '../session-list.component';
import { ISession } from '../../shared/events.model';
import { UserAuthService } from '../../../user/user.auth.service';

describe('SessionListComponent', () => {
    let component: SessionListComponent
    let mockVoterService, 
    mockAuthService: UserAuthService,
    mockHttp;
    const intermediate = 'Intermediate',
          beginner = 'Beginner',
          firstSession = 'Session 1',
          secondSession = 'Session 2',
          thirdSession = 'Session 3',
          name = 'name';

    beforeEach(() => {
        mockAuthService = new UserAuthService(mockHttp);
        component = new SessionListComponent(mockVoterService, mockAuthService);
    });

    describe('ngOnChanges', () => {
        it('should filter the sessions correctly', () => {

            // Arrange
            let changes = {
                filterBy: intermediate
            };

            component.sessions = <ISession[]>[{
                name: firstSession,
                level: intermediate
            }, {
                name: secondSession,
                level: beginner
            }, {
                name: thirdSession,
                level: intermediate
            }];

            component.filterBy = intermediate;

            // Act 
            component.ngOnChanges(changes);

            // Assert
            expect(component.visibleSessions.length).toBe(2);
            expect(component.visibleSessions[0].name).toBe(firstSession);
            expect(component.visibleSessions[1].name).toBe(thirdSession);
        });

        it('should sort the sessions correctly', () => {
            // Arrange
            let changes = {
                sortBy: name
            };

            component.sessions = <ISession[]>[{
                name: firstSession,
                level: intermediate
            }, {
                name: thirdSession,
                level: beginner
            }, {
                name: secondSession,
                level: intermediate
            }];
            component.visibleSessions = component.sessions;
            component.sortBy = name;

            // Act
            component.ngOnChanges(changes);

            // Assert
            expect(component.visibleSessions.length).toBe(3);
            expect(component.visibleSessions[1].name).toBe(secondSession);
            expect(component.visibleSessions[2].name).toBe(thirdSession);
        });
    });
})