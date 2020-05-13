import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RadialGradientAnimationDirective} from './directive/radial-gradient-animation.directive';
import {LogoComponent} from './logo/logo.component';
import {PerspectiveAnimationDirective} from './directive/perspective-animation.directive';
import {DataTableComponent} from './data-table/data-table.component';
import {MaterialModule} from '../../material/material.module';
import { TableSkeletonComponent } from './skeleton/table-skeleton/table-skeleton.component';
import { CardSkeletonComponent } from './skeleton/card-skeleton/card-skeleton.component';

@NgModule({
  declarations: [RadialGradientAnimationDirective, LogoComponent, PerspectiveAnimationDirective, DataTableComponent, TableSkeletonComponent, CardSkeletonComponent],
  exports: [RadialGradientAnimationDirective, LogoComponent, PerspectiveAnimationDirective, DataTableComponent, TableSkeletonComponent, CardSkeletonComponent],
  imports: [CommonModule, MaterialModule],
})
export class SharedModule {}
