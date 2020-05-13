import {Component, Input, OnInit} from '@angular/core';
import {ITenderType} from '../../../../homepage/models/tender-type.interface';

@Component({
  selector: 'app-card-tender-type',
  template: `
    <mat-card class="mat-elevation-z4" [ngClass]="{disabled: !tenderType.isEnabled}">
      <img [alt]="tenderType.label" [src]="tenderType.imgUrl" mat-card-image />
      <mat-card-content>
        <h3>{{ tenderType.label }}</h3>
        <a>{{ tenderType.eventCount }} events today</a>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./card-tender-type.component.scss'],
})
export class CardTenderTypeComponent implements OnInit {
  @Input() tenderType: ITenderType;
  constructor() {}

  ngOnInit(): void {}
}
