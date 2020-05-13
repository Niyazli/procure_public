import {Component, OnInit} from '@angular/core';
import {LayoutService} from '../../../layout/services/layout.service';
import {CompanySubheaderComponent} from '../../components/company-subheader/company-subheader.component';

@Component({
  selector: 'app-supplier-list',
  template: `
    <div class="row">
      <div class="col-12">
        <mat-card>
          <app-supplier-filtering></app-supplier-filtering>
          <app-supplier-list-table></app-supplier-list-table>
        </mat-card>
      </div>
    </div>
  `,
  styleUrls: ['./supplier-list.component.scss'],
})
export class SupplierListComponent implements OnInit {
  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService.setSubheaderContent(CompanySubheaderComponent);
  }
}
