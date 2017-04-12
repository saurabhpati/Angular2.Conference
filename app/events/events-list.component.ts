import { Component, OnInit } from '@angular/core';
import { EventsListService } from './shared/events.service';
import { ToastrService } from './shared/toastr.service';

@Component({
  selector: 'events-list',
  templateUrl: 'app/events/events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events;

  constructor(
    private eventsService: EventsListService,
    private toastrService: ToastrService) {

  }

  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
  }

  handleThumbnailClick(eventName: string) {
    this.toastrService.success(eventName);
  }

}