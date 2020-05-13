import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-subheader',
  template: `
    <div class="row justify-content-center">
      <div class="col-auto">
        <mat-card class="p-4 h-100 d-flex align-items-center justify-content-center">
          <img src="assets/images/organizations/sts.png" alt="" width="250" />
        </mat-card>
      </div>
      <div class="col">
        <div class="h-100">
          <h4>
            <b>ABOUT US</b>
          </h4>
          <p>
            <b>
              We are only group of companies who provide complete procurement services in the market with certified CIPS professionals, own developed
              software REDIMO and CIPS certified training center PRO LOG
            </b>
          </p>
          <p>
            It’s a single Marketplace platform that brings structure and transparency to the complicated Tendering processes (RFx) and business
            valuable benefits both for Contracting Organization and Suppliers.
          </p>
          <p>
            It’s a tool which helps Buyers to make hard and complicated Evaluation and Awarding processes as simple as a couple of clicks, providing
            him an ability to concentrate on the quality of content rather than process.
          </p>
          <p>
            It’s a place where you can not only purchase, but Sell and trade: Your Assets / Any type of Products / Any type of Services / Get category
            based opportunity notifications
          </p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./product-subheader.component.scss'],
})
export class ProductSubheaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
