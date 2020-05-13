import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthWrapperComponent} from './auth-wrapper.component';
import {RegisterComponent} from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthWrapperComponent,
    children: [
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
