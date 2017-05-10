import { Component } from '@angular/core';
import { UserAuthService } from "../user/user.auth.service";
import { EventsListService, ISession } from "../events/index";

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/nav-bar.component.html',
    styleUrls: ['app/nav/nav-bar.component.css']
})

export class NavBarComponent {
    
    constructor(private authService: UserAuthService, private eventsListService: EventsListService ) {
        /* auth service is injected here because it is needed in the html template to evaluate 
        whether the user is authenticated and if yes, then to access the user's first name*/
    }

    searchSession(searchTerm: string): void{
        let foundSessions: ISession[];

        this.eventsListService.searchSessions(searchTerm).subscribe(sessions=> {
         foundSessions = sessions   
         console.log(foundSessions);   
        });
    }
}