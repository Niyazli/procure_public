import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-wrapper',
  template: ` <router-outlet></router-outlet> `,
  styles: [],
})
export class ProductWrapperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
