import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[localization]',
})
export class LocalizationDirective {
  @Input() isPlaceholder: boolean;
  constructor(private el: ElementRef<HTMLElement>) {}
}
