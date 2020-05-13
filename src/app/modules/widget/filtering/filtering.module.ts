import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilteringByCategoriesComponent} from './components/filtering-by-categories/filtering-by-categories.component';
import {FilteringAdvancedComponent} from './components/filtering-advanced/filtering-advanced.component';
import {MaterialModule} from '../../material/material.module';
import {FormsModule} from '@angular/forms';
import {SupplierFilteringComponent} from './components/filtering-supplier/supplier-filtering.component';

@NgModule({
  declarations: [FilteringByCategoriesComponent, FilteringAdvancedComponent, SupplierFilteringComponent],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [FilteringByCategoriesComponent, FilteringAdvancedComponent, SupplierFilteringComponent],
})
export class FilteringModule {}
