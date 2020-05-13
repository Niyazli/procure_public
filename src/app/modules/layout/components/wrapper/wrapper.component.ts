import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wrapper',
  template: `
    <header>
      <app-header></app-header>
    </header>
    <main class="container">
      <ng-content></ng-content>
    </main>
    <footer class="container">
      <app-footer></app-footer>
    </footer>
  `,
  styles: [
    `
      main {
        margin-top: -40px;
      }
      footer {
        margin-top: 40px;
      }
    `,
  ],
})
export class WrapperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
