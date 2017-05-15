import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'upvote',
    templateUrl: 'app/events/event-details/upvote.component.html',
    styleUrls: ['app/events/event-details/upvote.component.css']
})

export class UpVoteSessionComponent {
    @Input() set isVoted(val) {
        this.iconColor = val ? 'red' : 'white'
    }
    @Input() count: number;
    @Output() vote = new EventEmitter();
    private iconColor: string;

    onClick(): void {
        this.vote.emit({});
    }
}