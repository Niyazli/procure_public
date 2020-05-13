import {Component, Input, OnInit} from '@angular/core';
import {LotModel} from './models/lot.model';

@Component({
  selector: 'app-lot-wrapper',
  template: `
    <div class="row">
      <div class="col-12">
        <mat-accordion class="isPrimary">
          <mat-expansion-panel *ngFor="let lot of lots" class="my-2">
            <mat-expansion-panel-header>
              <mat-panel-title>Lot Name</mat-panel-title>
              <mat-panel-description>Lot Categories</mat-panel-description>
            </mat-expansion-panel-header>
            <ng-template matExpansionPanelContent>
              <div class="container-fluid mt-4">
                <section class="row">
                  <div class="col-12">
                    <app-lot-info-table [lot]="lot"></app-lot-info-table>
                  </div>
                </section>
                <section class="row">
                  <mat-divider></mat-divider>
                </section>
                <section class="row">
                  <div class="col-12">
                    <app-lot-envelopes [envelopes]="lot.envelopes"></app-lot-envelopes>
                  </div>
                </section>
              </div>
            </ng-template>
          </mat-expansion-panel>
        </mat-accordion>
      </div>
    </div>
  `,
  styles: [
    `
      section {
        margin-top: 16px;
      }
    `,
  ],
})
export class LotWrapperComponent implements OnInit {
  @Input() lots: LotModel[];
  constructor() {}

  ngOnInit(): void {}
}
