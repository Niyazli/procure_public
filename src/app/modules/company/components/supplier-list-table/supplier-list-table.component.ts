import {Component, OnInit} from '@angular/core';
import {SupplierListModel} from '../../models/supplier-list.model';
import {SUPPLIER_LIST} from '../../const/supplier.const';
import {MatDialog} from '@angular/material/dialog';
import {CardSupplierComponent} from '../../../widget/card/components/card-supplier/card-supplier.component';

@Component({
  selector: 'app-supplier-list-table',
  template: `
    <ng-container>
      <div class="table-responsive px-1">
        <table class="table mat-elevation-z4 bg-white">
          <thead>
            <tr>
              <th colspan="2">Organization Name</th>
              <th>purchasing categories</th>
              <th>type</th>
              <th colspan="2">ASAN Imza verified</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let supplier of supplierList">
              <td class="table-col__m"><img [src]="supplier.organizationLogo" [alt]="supplier.organizationName" /></td>
              <td>{{ supplier.organizationName }}</td>
              <td>
                <mat-icon class="mx-2" color="primary" *ngFor="let category of supplier.categories">{{ category }}</mat-icon>
              </td>
              <td>{{ supplier.type }}</td>
              <td class="table-col__xs">
                <button *ngIf="supplier.isAsanVerified" mat-icon-button>
                  <mat-icon class="text-success">check_circle_outline</mat-icon>
                </button>
                <button *ngIf="!supplier.isAsanVerified" mat-icon-button>
                  <mat-icon class="text-danger">highlight_off</mat-icon>
                </button>
              </td>
              <td class="table-col__xs">
                <button mat-icon-button (click)="handleDialog(supplier)"><mat-icon>info</mat-icon></button>
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </ng-container>
    <app-table-skeleton *ngIf="loadingState"></app-table-skeleton>
  `,
  styleUrls: ['./supplier-list-table.component.scss'],
})
export class SupplierListTableComponent implements OnInit {
  loadingState: boolean;
  supplierList: SupplierListModel[];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadingState = true;
    setTimeout(() => {
      this.supplierList = SUPPLIER_LIST;
      this.loadingState = false;
    }, 2500);
  }

  handleDialog(supplier) {
    const modal = this.dialog.open(CardSupplierComponent);
    modal.componentInstance.supplier = supplier;
  }
}
