import { Component, OnInit } from '@angular/core';
import { EventsListService } from './shared/events.service';
import { ToastrService } from './shared/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'events-list',
  templateUrl: 'app/events/events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events;

  constructor(
    private eventsService: EventsListService,
    private toastrService: ToastrService,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName: string) {
    this.toastrService.success(eventName);
  }

}