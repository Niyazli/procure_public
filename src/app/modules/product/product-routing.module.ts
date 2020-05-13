import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductWrapperComponent} from './product-wrapper.component';
import {ProductAndServiceComponent} from './pages/product-and-service/product-and-service.component';

const routes: Routes = [
  {
    path: '',
    component: ProductWrapperComponent,
    children: [
      {
        path: 'service',
        component: ProductAndServiceComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
