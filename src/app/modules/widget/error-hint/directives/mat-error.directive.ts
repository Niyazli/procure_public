import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ErrorHintService } from '../services/error-hint.service';

@Directive({
  selector: '[libMatError]'
})
export class MatErrorDirective implements OnInit {
  @Input() name: string;
  constructor(
    private el: ElementRef<any>,
    private errorHintService: ErrorHintService,
    private render: Renderer2
  ) { }
  ngOnInit(): void {
    this.errorHintService.validationError.subscribe(
      (data: { control: string; error: string }) => {
        if (data && this.name?.toLowerCase() === data.control?.toLowerCase()) {
          this.el.nativeElement.innerText = data.error;
          this.render.addClass(this.el.nativeElement, this.errorHintService.hintClassName);
        }
      }
    );
    this.errorHintService.clearError.subscribe(
      (data: {control: string, error: string}) => {
        this.el.nativeElement.innerText = null;
      }
    );
  }
}
