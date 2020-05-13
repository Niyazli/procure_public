import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRadialGradientAnimation]',
})
export class RadialGradientAnimationDirective {
  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {}
  //
  // ngOnInit() {
  //
  //   this.el.nativeElement.style =
  // }

  @HostListener('mousemove', ['$event'])
  onHover(e) {
    const windowWidth = this.el.nativeElement.clientWidth;
    const windowHeight = this.el.nativeElement.clientHeight;
    const mouseXPercentage = Math.round((e.pageX / windowWidth) * 100);
    const mouseYPercentage = Math.round((e.pageY / windowHeight) * 100);
    const style = `radial-gradient(70% 100% at ${mouseXPercentage}% ${mouseYPercentage}%, #4896c2, #1e6799)`;
    this.renderer.setStyle(this.el.nativeElement, 'background', style);
  }
}
