import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductWrapperComponent} from './product-wrapper.component';
import {ProductAndServiceComponent} from './pages/product-and-service/product-and-service.component';
import {ProductSubheaderComponent} from './components/product-subheader/product-subheader.component';
import {MaterialModule} from '../material/material.module';
import { ProductTabComponent } from './components/product-tab/product-tab.component';
import {LayoutModule} from '../layout/layout.module';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  declarations: [ProductWrapperComponent, ProductAndServiceComponent, ProductSubheaderComponent, ProductTabComponent, ProductFormComponent],
  imports: [CommonModule, ProductRoutingModule, MaterialModule, LayoutModule],
})
export class ProductModule {}
