import { Component, Inject } from '@angular/core';
import { UserAuthService } from "../user/user.auth.service";
import { EventsListService, ISession, TOKEN_TOASTR, IToastr } from "../events/index";


@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/nav-bar.component.html',
    styleUrls: ['app/nav/nav-bar.component.css']
})

export class NavBarComponent {
     
    foundSessions: ISession[];

    constructor(
        private authService: UserAuthService, 
        private eventsListService: EventsListService,
        @Inject(TOKEN_TOASTR) private toastrService: IToastr ) {
        /* auth service is injected here because it is needed in the html template to evaluate 
        whether the user is authenticated and if yes, then to access the user's first name*/
    }

    searchSession(searchTerm: string): void{

        this.eventsListService.searchSessions(searchTerm).subscribe(sessions=> {
         this.foundSessions = sessions;

         if (this.foundSessions.length == 0) {
            this.toastrService.error('No such sessions found for your search');
         }
        });
    }
}