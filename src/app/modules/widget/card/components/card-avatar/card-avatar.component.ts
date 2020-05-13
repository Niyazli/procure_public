import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-avatar',
  template: `
    <ng-container>
      <mat-card matRipple>
        <mat-icon>add_photo_alternate</mat-icon>
      </mat-card>
      <a mat-button color="primary">Set company logo</a>
    </ng-container>
  `,
  styleUrls: ['./card-avatar.component.scss'],
})
export class CardAvatarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
