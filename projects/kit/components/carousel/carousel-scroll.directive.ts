import {Directive, ElementRef, Inject, Output} from '@angular/core';
import {tuiTypedFromEvent} from '@taiga-ui/cdk';
import {filter, map, tap, throttleTime} from 'rxjs';

@Directive({
    selector: '[tuiCarouselScroll]',
})
export class TuiCarouselScrollDirective {
    @Output()
    readonly tuiCarouselScroll = tuiTypedFromEvent(this.el.nativeElement, 'wheel').pipe(
        filter(({deltaX}) => Math.abs(deltaX) > 20),
        throttleTime(500),
        map(({deltaX}) => Math.sign(deltaX)),
        tap(() => {
            // So we always have space to scroll and overflow-behavior saves us from back nav
            this.el.nativeElement.scrollLeft = 10;
        }),
    );

    constructor(@Inject(ElementRef) private readonly el: ElementRef<HTMLElement>) {}
}
