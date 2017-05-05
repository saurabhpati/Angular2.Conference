import { Component,Input } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    templateUrl: 'app/events/shared/collapsible-well.component.html'
})

export class CollapsibleWellComponent {
    
    isVisible: boolean;
    @Input() title: string;

    constructor() {
        this.isVisible = true;
    }

    toggleContent(): void {
        this.isVisible = !this.isVisible;
    }
}