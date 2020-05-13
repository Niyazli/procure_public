import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-skeleton',
  template: `
    <div class="post" *ngFor="let item of [].constructor(5)">
      <div class="avatar"></div>
      <div class="w-100">
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
  `,
  styleUrls: ['./card-skeleton.component.sass'],
})
export class CardSkeletonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
