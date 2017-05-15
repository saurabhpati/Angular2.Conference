import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'upvote',
    templateUrl: 'app/events/event-details/upvote.component.html',
    styleUrls: ['app/events/event-details/upvote.component.css']
})

export class UpVoteSessionComponent {
    @Input() isVoted: boolean;
    @Input() count: number;
    @Output() vote = new EventEmitter();

    onClick(): void {
        this.vote.emit({});
    }
}