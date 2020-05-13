import {ModuleWithProviders, NgModule} from '@angular/core';
import {BackendConfig} from './config/backend.config';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [],
  exports: [],
})
export class BackendModule {
  static forRoot(config: BackendConfig): ModuleWithProviders {
    return {
      ngModule: BackendModule,
      providers: [{provide: BackendConfig, useValue: config}],
    };
  }
}
