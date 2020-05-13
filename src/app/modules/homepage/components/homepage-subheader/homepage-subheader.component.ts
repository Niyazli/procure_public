import {Component} from '@angular/core';
import {IHomepageService} from '../../models/homepage-service.interface';
import {HOMEPAGE_SERVICES} from '../../const/services.const';
import {ITenderType} from '../../models/tender-type.interface';
import {TENDER_TYPES} from '../../const/tender-types.const';

@Component({
  selector: 'app-homepage-subheader',
  templateUrl: './homepage-subheader.component.html',
  styleUrls: ['./homepage-subheader.component.scss'],
})
export class HomepageSubheaderComponent {
  services: IHomepageService[] = HOMEPAGE_SERVICES;
  tenderTypes: ITenderType[] = TENDER_TYPES;

  constructor() {}
}
