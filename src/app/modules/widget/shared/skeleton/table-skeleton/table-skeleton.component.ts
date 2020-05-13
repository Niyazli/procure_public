import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-skeleton',
  template: `
    <div class="post" *ngFor="let item of [].constructor(5)">
      <div class="avatar"></div>
      <div class="w-100">
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
  `,
  styleUrls: ['./table-skeleton.component.sass'],
})
export class TableSkeletonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
