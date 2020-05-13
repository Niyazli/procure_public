import {Component, ViewContainerRef} from '@angular/core';
import {ComponentPortal, Portal} from '@angular/cdk/portal';
import {LayoutService} from '../../services/layout.service';
import {IMenuItem} from '../../../../shared/models/menu-item.interface';
import {MENU_ITEMS} from '../../../../shared/const/menu-item.const';

@Component({
  selector: 'app-header',
  template: `
    <header class="header" appRadialGradientAnimation>
      <div class="container">
        <nav class="mat-card mat-elevation-z4 p-2">
          <div class="header--logo" routerLink="/">
            <app-logo></app-logo>
            <div class="header--logo__description">
              № 1
              <br />
              Marketplace
            </div>
          </div>
          <ul class="header--menu_items" [ngClass]="{'is-active': showMenu}">
            <li *ngFor="let item of menuItems" class="header--navigation">
              <a mat-button (click)="showMenu = false" [routerLink]="item.route">{{ item.label }}</a>
            </li>
            <button class="header--close" (click)="showMenu = false" mat-icon-button color="warn">
              <mat-icon>close</mat-icon>
            </button>
          </ul>
          <ul>
            <li class="header--register">
              <a routerLink="auth/register" mat-raised-button>Register</a>
            </li>
            <li class="header--lang">
              <button mat-icon-button>AZ</button>
              <button mat-icon-button>EN</button>
            </li>
            <li class="header--mobile">
              <button matTooltip="Register" mat-icon-button>
                <mat-icon>person</mat-icon>
              </button>
              <button matTooltip="Menu" (click)="showMenu = true" mat-icon-button>
                <mat-icon>menu</mat-icon>
              </button>
            </li>
          </ul>
        </nav>

        <section>
          <ng-template [cdkPortalOutlet]="selectedPortal"></ng-template>
        </section>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuItems: IMenuItem[] = MENU_ITEMS;
  selectedPortal: Portal<any>;
  showMenu: boolean;

  constructor(private viewContainerRef: ViewContainerRef, private layoutService: LayoutService) {
    this.layoutService.subheaderContent.subscribe(component => {
      this.selectedPortal = new ComponentPortal(component);
    });
  }
}
