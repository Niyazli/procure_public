import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth-wrapper',
  template: ` <router-outlet></router-outlet> `,
  styles: [],
})
export class AuthWrapperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
