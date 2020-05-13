import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {AuthWrapperComponent} from './auth-wrapper.component';
import {RegisterComponent} from './pages/register/register.component';
import {MaterialModule} from '../material/material.module';
import { AuthStepperComponent } from './components/auth-stepper/auth-stepper.component';
import {CategoryModule} from '../widget/category/category.module';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {CardModule} from '../widget/card/card.module';

@NgModule({
  declarations: [AuthWrapperComponent, RegisterComponent, AuthStepperComponent, RegisterFormComponent],
  imports: [CommonModule, AuthRoutingModule, MaterialModule, CategoryModule, CardModule],
})
export class AuthModule {}
