import {Injectable, InjectionToken} from '@angular/core';
import {Subject} from 'rxjs';
import {ComponentType} from '@angular/cdk/overlay';
import {PortalInjector} from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  subheaderContent: Subject<ComponentType<any>> = new Subject<ComponentType<any>>();

  constructor() {}

  setSubheaderContent(component: ComponentType<any>) {
    this.subheaderContent.next(component);
  }
}
