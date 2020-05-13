import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizationDirective } from './directives/localization.directive';



@NgModule({
  declarations: [LocalizationDirective],
  imports: [
    CommonModule
  ]
})
export class LocalizationModule { }
