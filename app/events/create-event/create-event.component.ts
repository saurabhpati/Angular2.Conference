import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/events/create-event/create-event.component.html'
})

export class CreateEventComponent {

    constructor(private router: Router) {

    }

    cancel() {
        this.router.navigate(['/events']);
    }
}