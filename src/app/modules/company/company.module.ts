import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CompanyRoutingModule} from './company-routing.module';
import {CompanyWrapperComponent} from './company-wrapper.component';
import {CategoryModule} from '../widget/category/category.module';
import {MaterialModule} from '../material/material.module';
import { CompanySubheaderComponent } from './components/company-subheader/company-subheader.component';
import { SupplierListComponent } from './pages/supplier-list/supplier-list.component';
import {LayoutModule} from '../layout/layout.module';
import { SupplierListTableComponent } from './components/supplier-list-table/supplier-list-table.component';
import {FilteringModule} from '../widget/filtering/filtering.module';
import {SharedModule} from '../widget/shared/shared.module';

@NgModule({
  declarations: [CompanyWrapperComponent, CompanySubheaderComponent, SupplierListComponent, SupplierListTableComponent],
  imports: [CommonModule, CompanyRoutingModule, CategoryModule, MaterialModule, LayoutModule, FilteringModule, SharedModule],
})
export class CompanyModule {}
