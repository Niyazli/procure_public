import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CompanyWrapperComponent} from './company-wrapper.component';
import {SupplierListComponent} from './pages/supplier-list/supplier-list.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyWrapperComponent,
    children: [
      {
        path: 'list',
        component: SupplierListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
