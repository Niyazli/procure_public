import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appPerspectiveAnimation]',
})
export class PerspectiveAnimationDirective {
  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {}
  @HostBinding('style.perspective') perspective = '30px';
  @HostBinding('style.transition') transition = 'transform 0.5s';
  @HostBinding('style.z-index') zIndex = '9';
  @HostListener('mousemove', ['$event'])
  onHover(e) {
    // this.updateTransformStyle(10, 20);
    this.updateTransformStyle(
      (e.clientY / this.el.nativeElement.offsetHeight / 2 * 10).toFixed(2),
      (e.x / this.el.nativeElement.offsetWidth / 2 * 10).toFixed(2)
    );
    // // Init
    // let container = document.getElementById('container'),
    //   inner = document.getElementById('inner');
    //
    // // Mouse
    // let mouse = {
    //   _x: 0,
    //   _y: 0,
    //   x: 0,
    //   y: 0,
    //   updatePosition(event) {
    //     let e = event || window.event;
    //     this.x = e.clientX - this._x;
    //     this.y = (e.clientY - this._y) * -1;
    //   },
    //   setOrigin(e) {
    //     this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
    //     this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    //   },
    //   show() {
    //     return '(' + this.x + ', ' + this.y + ')';
    //   },
    // };
    //
    // // Track the mouse position relative to the center of the container.
    // mouse.setOrigin(container);
    //
    // // ----------------------------------------------------
    //
    // let counter = 0;
    // let refreshRate = 10;
    // let isTimeToUpdate = function () {
    //   return counter++ % refreshRate === 0;
    // };
    //
    // // ----------------------------------------------------
    //
    // let onMouseEnterHandler = function (event) {
    //   update(event);
    // };
    //
    // let onMouseLeaveHandler = function () {
    //   inner.style = '';
    // };
    //
    // let onMouseMoveHandler = function (event) {
    //   if (isTimeToUpdate()) {
    //     update(event);
    //   }
    // };
    //
    // // ----------------------------------------------------
    //
    // let update = function (event) {
    //   mouse.updatePosition(event);
    //   updateTransformStyle((mouse.y / inner.offsetHeight / 2).toFixed(2), (mouse.x / inner.offsetWidth / 2).toFixed(2));
    // };
    //
    // let updateTransformStyle = function (x, y) {
    //   let style = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
    //   inner.style.transform = style;
    //   inner.style.webkitTransform = style;
    //   inner.style.mozTranform = style;
    //   inner.style.msTransform = style;
    //   inner.style.oTransform = style;
    // };
    //
    // // --------------------------------------------------------
    //
    // container.onmousemove = onMouseMoveHandler;
    // container.onmouseleave = onMouseLeaveHandler;
    // container.onmouseenter = onMouseEnterHandler;
  }

  updateTransformStyle(x, y) {
    this.renderer.setStyle(this.el.nativeElement, 'transform', `rotateX(${x}deg) rotateY(${y}deg)`);
  }
}
