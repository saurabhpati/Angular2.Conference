import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
        <div><h1>Upcoming Angular Events</h1>
            <hr/>
            <div class='well hoverwell thumbnail'>
                <h2>{{event.name}}</h2>
                <div>Date: {{event.date}}</div>
                <div>TIme: {{event.time}}</div>
                <div>Price: \${{event.price}}</div>
                <div>
                    <span>Location: {{event.location.address}}</span>
                    <span>&nbsp;</span>
                    <span>{{event.location.city}}, {{event.location.country}}</span>
                </div>
            </div>
        </div>
    `
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