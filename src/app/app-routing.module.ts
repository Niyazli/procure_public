import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {loadAuth, loadCompany, loadEvent, loadHomepage, loadProduct} from './lazy-loads';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: loadHomepage,
  },
  {
    path: 'auth',
    loadChildren: loadAuth,
  },
  {
    path: 'event',
    loadChildren: loadEvent,
  },
  {
    path: 'company',
    loadChildren: loadCompany,
  },
  {
    path: 'product',
    loadChildren: loadProduct,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
