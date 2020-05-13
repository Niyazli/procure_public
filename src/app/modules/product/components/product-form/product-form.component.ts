import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-form',
  template: `
    <div class="row">
      <div class="col-12">
        <h3 class="ml-3">Product Form</h3>
      </div>
      <div class="col-12">
        <flexbox flexWrap="wrap">
          <mat-form-field appearance="outline">
            <mat-label>Company</mat-label>
            <input type="text" matInput required />
            <mat-icon matSuffix>business</mat-icon>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Name</mat-label>
            <input type="text" matInput required />
            <mat-icon matSuffix>account_box</mat-icon>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Phone</mat-label>
            <input type="text" matInput required />
            <mat-icon matSuffix>contact_phone</mat-icon>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>E-email</mat-label>
            <input type="text" matInput required />
            <mat-icon matSuffix>contact_mail</mat-icon>
          </mat-form-field>
        </flexbox>
      </div>
    </div>
  `,
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
