import {NgModule, ModuleWithProviders, SkipSelf, Optional} from '@angular/core';
import {ErrorHintDirective} from './directives/error-hint.directive';
import { ErrorHintConfig } from './config/error-hint.config';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatErrorDirective } from './directives/mat-error.directive';

@NgModule({
  declarations: [ErrorHintDirective, MatErrorDirective],
  imports: [CommonModule, MatFormFieldModule],
  providers: [],
  exports: [ErrorHintDirective, MatErrorDirective],
})
export class ErrorHintModule {
  constructor(@Optional() @SkipSelf() parentModule?: ErrorHintModule) {}
  static forRoot(config: ErrorHintConfig): ModuleWithProviders {
    return {
      ngModule: ErrorHintModule,
      providers: [{provide: ErrorHintConfig, useValue: config}],
    };
  }
  static forChild(): ModuleWithProviders {
    return {
      ngModule: ErrorHintModule,
      providers: [],
    };
  }
}
