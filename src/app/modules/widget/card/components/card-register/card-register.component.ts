import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-register',
  template: `
    <mat-card class="mat-elevation-z4">
      <div class="container-fluid">
        <form class="row">
          <div class="col-md-6">
            <mat-form-field>
              <input type="text" matInput required placeholder="Type company name" />
            </mat-form-field>
          </div>
          <div class="col-md-6">
            <mat-form-field>
              <input type="text" matInput required placeholder="Type e-mail" />
            </mat-form-field>
          </div>
          <div class="col-md-12">
            <mat-radio-group class="d-flex align-items-center justify-content-between py-3 flex-wrap" color="primary">
              <span>Company origin</span>
              <mat-radio-button>Local</mat-radio-button>
              <mat-radio-button>International</mat-radio-button>
              <button type="submit" routerLink="auth/register" mat-raised-button color="accent">Register</button>
            </mat-radio-group>
          </div>
        </form>
      </div>
    </mat-card>
  `,
  styleUrls: ['./card-register.component.scss'],
})
export class CardRegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
