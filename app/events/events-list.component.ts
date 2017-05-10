import { Component, OnInit } from '@angular/core';
import { EventsListService } from './shared/events.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from "./index";

@Component({
  selector: 'events-list',
  templateUrl: 'app/events/events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(private eventsService: EventsListService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

}