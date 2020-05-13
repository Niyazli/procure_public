import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-company-subheader',
  template: `
    <flexbox alignItems="center" justifyContent="center" flexWrap="nowrap">
      <p class="m-0 mr-4">
        We are always fullfill our catalogue, so as Supplying orgnization you have a great oportunity to register your company before platfrom launch
      </p>
      <button mat-raised-button color="accent">Register as Supplier</button>
    </flexbox>
  `,
  styles: [],
})
export class CompanySubheaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
