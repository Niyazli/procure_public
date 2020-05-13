import {
  ComponentRef,
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';
import { AttributesE } from '../enums/attributes.enum';
import { ErrorHintService } from '../services/error-hint.service';

@Directive({
  selector: '[errorHint]'
})
export class ErrorHintDirective implements OnInit {
  controlName: string;
  constructor(
    private el: ElementRef<HTMLInputElement>,
    private errorHintService: ErrorHintService,
    private render: Renderer2,
  ) {}
  ngOnInit(): void {
    this.getAttributes();
    this.errorHintService.clearError.subscribe(res => {
      this.handleClear();
    });
    this.errorHintService.validationError.subscribe(
      (data: { control: string; error: string }) => {
        if (data) {
          this.handleValidationError(data);
        }
      }
    );
  }
  private getAttributes() {
    this.controlName =
      this.el.nativeElement.getAttribute(AttributesE.controlName) ||
      this.el.nativeElement.getAttribute(AttributesE.name);
  }
  private handleClear() {
    this.render.removeClass(
      this.el.nativeElement,
      this.errorHintService.className
    );
  }
  private handleValidationError(data: { control: string; error: string }) {
    if (this.controlName && this.controlName.toLowerCase() === data.control?.toLowerCase()) {
      this.render.addClass(
        this.el.nativeElement,
        this.errorHintService.className
      );
      // TODO: change once evrica
      this.el.nativeElement.click();
    }
  }
}
