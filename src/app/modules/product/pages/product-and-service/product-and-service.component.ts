import {Component, OnInit} from '@angular/core';
import {LayoutService} from '../../../layout/services/layout.service';
import {ProductSubheaderComponent} from '../../components/product-subheader/product-subheader.component';

@Component({
  selector: 'app-product-and-service',
  template: `
    <mat-card>
      <div class="row">
        <div class="col-12">
          <h3><b>About us</b></h3>
          <p>
            Before the publication of our new product - procure.az online platform, we already had a vast experience in the field of procurement,
            which in principle, served as the start point for creating this online tool. A short time ago, by joining the group, development team has
            already shown itself worthy in the project etender.gov.az on behalf of the Smart Solutions Group www.smartsolutionsgroup.az, of which STS
            (Sənaye Təchizat Sistemləri) is an integral part. Today this team is a diverse, creative group of people passionate about procurement.
          </p>
          <p>
            Moving in the direction of IT technologies, we do not forget our origins and today we offer the best quality services in the following
            fields:
          </p>
        </div>
        <div class="col-12 mt-4">
          <app-product-tab></app-product-tab>
        </div>
      </div>
    </mat-card>
    <mat-card class="mt-4">
      <app-product-form></app-product-form>
    </mat-card>
  `,
  styleUrls: ['./product-and-service.component.scss'],
})
export class ProductAndServiceComponent implements OnInit {
  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService.setSubheaderContent(ProductSubheaderComponent);
  }
}
