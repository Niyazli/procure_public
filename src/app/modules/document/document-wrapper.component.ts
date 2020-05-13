import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-document-wrapper',
  template: ` <router-outlet></router-outlet> `,
  styles: [],
})
export class DocumentWrapperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
