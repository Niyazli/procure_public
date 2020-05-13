import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LotModel} from '../../models/lot.model';
import {LOT_SETTING_HEADER} from '../../../../widget/shared/data-table/const/table-headers.const';

@Component({
  selector: 'app-lot-info-table',
  template: `
    <ng-container>
      <section class="row">
        <div class="col-12">
          <app-data-table [isHorizontalTable]="true" [tableBordered]="true" [tableHeaders]="tableHeader" [tableData]="tableData"></app-data-table>
        </div>
      </section>
      <section class="row">
        <div class="col-12">
          <mat-card class="d-flex align-items-center mat-elevation-z4 rounded-0 mx-1">
            <h4>LOT PAYMENT FEE: {{ lot.paymentFee }} {{ lot.lotSettings.paymentTerms.settingType }}</h4>
          </mat-card>
        </div>
      </section>
      <section class="row">
        <div class="col-12">
          <mat-card class="p-0 mat-elevation-z4 rounded-0 mx-1">
            <h4 class="mb-0 ml-3 pt-3 pb-1">PURCHASING CATEGORIES</h4>
            <mat-list>
              <ng-container *ngFor="let category of lot.categories">
                <mat-divider [inset]="true"></mat-divider>
                <mat-list-item class="d-inline-block">
                  <span class="d-flex" matLine>
                    <span class="cute-text-by-line d-block" [matTooltip]="category">
                      {{ category }}
                    </span>
                  </span>
                </mat-list-item>
              </ng-container>
              <mat-divider></mat-divider>
            </mat-list>
          </mat-card>
        </div>
      </section>
      <section class="row">
        <div class="col-12">
          <mat-card class="mat-elevation-z4 rounded-0 mx-1">
            <h4>ADDITIONAL INFORMATION</h4>
            <mat-divider></mat-divider>
            <mat-card-content>
              <p class="pt-3">{{ lot.additionalInfo }}</p>
            </mat-card-content>
          </mat-card>
        </div>
      </section>
    </ng-container>
  `,
  styleUrls: ['./lot-info-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LotInfoTableComponent implements OnChanges {
  @Input() lot: LotModel;

  tableHeader = LOT_SETTING_HEADER;
  tableData: any[];

  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    this.getTableData();
  }

  getTableData(): void {
    const keys = this.tableHeader.map(h => h.key);
    const data = {};
    keys.forEach(k => {
      data[k] = [this.lot.lotSettings[k].settingType, this.lot.lotSettings[k].description, this.lot.lotSettings[k].isRequired];
    });
    this.tableData = [data];
  }
}
