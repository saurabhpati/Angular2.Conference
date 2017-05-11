import { Component, Input } from '@angular/core';

@Component({
    selector: 'simple-modal',
    templateUrl: 'app/events/shared/simple-modal.component.html',
    styleUrls: ['app/events/shared/simple-modal.component.css']
})

export class SimpleModalComponent {
    @Input() title: string;
}