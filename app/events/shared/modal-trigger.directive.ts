import { Directive, Inject, ElementRef, OnInit, Input } from '@angular/core';
import { TOKEN_JQUERY } from "./jQuery.service";

@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit {

    el: HTMLElement;
    @Input('modal-trigger') modalId : string;

    constructor(el: ElementRef, @Inject(TOKEN_JQUERY) private $: any) {
        this.el = el.nativeElement;
    }

    ngOnInit(): void {
        this.el.addEventListener('click', () => {
            this.$(`#${this.modalId}`).modal({});
        });
    }
}
