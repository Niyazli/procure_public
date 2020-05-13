import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-company-wrapper',
  template: `<router-outlet></router-outlet> `,
  styles: [],
})
export class CompanyWrapperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
