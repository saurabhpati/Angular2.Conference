import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html'
})

export class EventsListComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '1/1/2018',
        time: '10.30 a.m',
        price: '59.99',
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
            address: '42 Baker Street',
            city: 'London',
            country: 'England'
        }
    }
}