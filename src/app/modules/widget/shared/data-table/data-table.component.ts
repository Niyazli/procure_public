import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {ITableCfg} from './models/table.cfg.interface';
import {ITableHeaders} from './models/table-header.interface';

@Component({
  selector: 'app-data-table',
  template: `
    <ng-container *ngIf="!loadingState; else skeleton">
      <div class="table-responsive px-1" *ngIf="tableHeaders && tableData && tableData.length > 0; else noData">
        <table
          (click)="console(dataToShow)"
          class="table bg-white"
          [ngClass]="{'mat-elevation-z4': !tableShadowless, 'table-bordered': tableBordered, isHorizontal: isHorizontalTable}"
        >
          <thead>
            <ng-container>
              <tr *ngIf="tableTitle">
                <th [colSpan]="tableHeaders.length" class="py-0">
                  <div class="d-flex align-items-center justify-content-between">
                    <h3 class="my-2">{{ tableTitle }}</h3>
                    <mat-paginator
                      *ngIf="tableCfg.totalItems > 1"
                      color="primary"
                      showFirstLastButtons
                      (page)="pageChange($event)"
                      [pageSize]="tableCfg.pageSize"
                      [length]="tableCfg.totalItems"
                    ></mat-paginator>
                  </div>
                </th>
              </tr>
              <tr *ngIf="!isHorizontalTable">
                <th *ngFor="let header of tableHeaders" localization>{{ isVisibleHeader(header.key) ? header.key : '' }}</th>
              </tr>
            </ng-container>
          </thead>
          <tbody *ngIf="!isHorizontalTable; else horizontal">
            <ng-container *ngFor="let element of dataToShow; let i = index">
              <tr>
                <td ngClass="table-col__{{ header.colSize ? header.colSize : '' }}" *ngFor="let header of tableHeaders">
                  <span *ngIf="isIndexColumn(header.key)">{{ i + 1 }}</span>
                  <span
                    *ngIf="!isActionColumn(header.key) && !isImgColumn(header.key) && !isIndexColumn(header.key)"
                    [matTooltip]="element[header.key] || 'No ' + header.key + ' data'"
                    class="cute-text-by-line max-line-2"
                  >
                    {{ element[header.key] || 'No ' + header.key + ' data' }}
                  </span>

                  <img *ngIf="isImgColumn(header.key)" [src]="element[header.key]" [alt]="header.key" />
                  <button *ngIf="isActionColumn(header.key)" mat-icon-button (click)="$action.emit(element.id)" color="primary">
                    <mat-icon>input</mat-icon>
                  </button>
                </td>
              </tr>
            </ng-container>
          </tbody>
          <ng-template #horizontal>
            <tbody>
              <ng-container *ngFor="let header of tableHeaders">
                <tr>
                  <th>{{ isVisibleHeader(header.key) ? header.key : '' }}</th>
                  <ng-container *ngFor="let elements of dataToShow">
                    <td *ngFor="let element of elements[header.key]" ngClass="table-col__{{ isCheckboxColumn(element) ? 'xs' : '' }}">
                      <span
                        *ngIf="!isCheckboxColumn(element)"
                        [matTooltip]="element || 'No ' + header.key + ' data'"
                        class="cute-text-by-line max-line-2"
                      >
                        {{ element || 'No ' + header.key + ' data' }}
                      </span>
                      <mat-checkbox color="primary" [checked]="element" disabled *ngIf="isCheckboxColumn(element)"></mat-checkbox>
                    </td>
                  </ng-container>
                </tr>
              </ng-container>
            </tbody>
          </ng-template>
        </table>
      </div>
      <ng-template #noData>
        <p class="ml-1">No data</p>
      </ng-template>
    </ng-container>
    <ng-template #skeleton>
      <app-table-skeleton></app-table-skeleton>
    </ng-template>
  `,
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableComponent implements OnChanges {
  @Input() tableHeaders: ITableHeaders[];
  @Input() tableData: any[];
  @Input() tableTitle: string;
  @Input() tableShadowless: boolean;
  @Input() tableBordered: boolean;
  @Input() loadingState: boolean;
  @Input() isHorizontalTable: boolean;
  @Output() $action: EventEmitter<string> = new EventEmitter<string>();
  dataToShow: any[];

  tableCfg: ITableCfg;

  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    this.tableCfg = new ITableCfg(this.tableData, 10);
    this.dataToShow = this.tableData?.slice(0, this.tableCfg.pageSize);
  }

  isVisibleHeader(header: string): boolean {
    return header !== 'imgUrl' && header !== 'action' && header !== 'index';
  }

  isImgColumn(header: string): boolean {
    return header === 'imgUrl';
  }
  isActionColumn(header: string): boolean {
    return header === 'action';
  }
  isIndexColumn(header: string): boolean {
    return header === 'index';
  }
  isCheckboxColumn(element: any): boolean {
    return typeof element === 'boolean';
  }

  pageChange(e: PageEvent) {
    const from = e.pageIndex * 10;
    const to = from + 10;
    this.dataToShow = this.tableData.slice(from, to);
  }

  console(element: any) {
    console.log(element);
  }
}
