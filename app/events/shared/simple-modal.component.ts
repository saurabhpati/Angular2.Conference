import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { TOKEN_JQUERY } from "./jQuery.service";

@Component({
    selector: 'simple-modal',
    templateUrl: 'app/events/shared/simple-modal.component.html',
    styleUrls: ['app/events/shared/simple-modal.component.css']
})

export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @ViewChild('modalContainer') containerEl: ElementRef

    constructor(@Inject(TOKEN_JQUERY) private $: any) {

    }

    closeModal(): void {
        this.$(this.containerEl.nativeElement).modal('hide');
    }
}