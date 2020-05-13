import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {CardService} from '../../services/card.service';
import {IOrganization} from '../../../../document/models/organization.interface';

@Component({
  selector: 'app-card-organization',
  template: `
    <div class="row justify-content-center" *ngIf="organization; else loader">
      <div class="col-auto">
        <mat-card class="p-4 h-100 d-flex align-items-center justify-content-center">
          <img [src]="organization.imgUrl" [alt]="organization.name" width="250" />
        </mat-card>
      </div>
      <div class="col">
        <mat-card class="h-100">
          <h4>
            <b>{{ organization.name }}</b>
          </h4>
          <div class="d-flex align-items-center mb-3">
            <p class="m-0">Business activity:</p>
            <mat-icon *ngFor="let category of organization.categories" class="mx-2" color="primary">{{ category }}</mat-icon>
          </div>
          <p>
            Company description:
            {{ organization.description }}
          </p>
        </mat-card>
      </div>
    </div>
    <ng-template #loader>
      <mat-progress-bar mode="indeterminate"></mat-progress-bar>
    </ng-template>
  `,
  styleUrls: ['./card-organization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardOrganizationComponent implements AfterViewInit {
  organization: IOrganization;
  constructor(public cardService: CardService, private cd: ChangeDetectorRef) {}
  ngAfterViewInit() {
    this.cardService.organizationCardData.subscribe(data => {
      this.organization = data;
      this.cd.detectChanges();
    });
  }

  // ngAfterContentChecked() {}

  // ngOnInit(): void {}
}
