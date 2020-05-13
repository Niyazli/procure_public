import {Component, Input, OnInit} from '@angular/core';
import {SupplierListModel} from '../../../../company/models/supplier-list.model';

@Component({
  selector: 'app-card-supplier',
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <img width="200px" [src]="supplier.organizationLogo" [alt]="supplier.organizationName" class="mb-3" />
          "PASHA Holding" LLC through its subsidiaries, invests in banking, insurance, construction, the property development and tourism sectors.
          <br />
          <br />
          Established in 2006, builds its business on the basis of effective management, corporate governance and thought investment decisions.
          <br />
          <br />
          The Holding has two types of investment assets portfolios: Controlling stakes in PASHA group companies and minority private equity
          investments.
        </div>
        <div class="col-lg-6">
          <mat-card>
            <h3>
              <b>{{ supplier.organizationName }}</b>
            </h3>
            <ul>
              <li>
                Asan imza: {{ supplier.isAsanVerified ? 'Verified' : 'Not verified' }}
                <mat-icon class="mx-2" [ngClass]="{'text-success': supplier.isAsanVerified, 'text-danger': supplier.isAsanVerified}">
                  {{ supplier.isAsanVerified ? 'check_circle_outline' : 'highlight_off' }}
                </mat-icon>
              </li>
              <li>
                Business activity: <mat-icon color="primary" class="mx-2" *ngFor="let category of supplier.categories">{{ category }}</mat-icon>
              </li>
              <li>
                VOEN: 12312312321312
              </li>
              <li>Address: Baku, Azerbaijan Street name xx</li>
              <li>Phone: (+99412) 568 15 16</li>
              <li>E-mail: office@pashaholding.az</li>
              <li>Website: <a target="_blank" href="https://pashaholding.az">www.pashaholding.az</a></li>
              <li>Registration on the platfrom: 02.03.2019</li>
            </ul>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./card-supplier.component.scss'],
})
export class CardSupplierComponent implements OnInit {
  @Input() supplier: SupplierListModel;

  constructor() {}

  ngOnInit(): void {}
}
