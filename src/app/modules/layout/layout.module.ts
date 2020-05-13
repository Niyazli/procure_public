import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {WrapperComponent} from './components/wrapper/wrapper.component';
import {MaterialModule} from '../material/material.module';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../widget/shared/shared.module';
import { FlexBoxComponent } from './components/flex-box/flex-box.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, WrapperComponent, FlexBoxComponent],
  exports: [WrapperComponent, FlexBoxComponent],
    imports: [CommonModule, MaterialModule, RouterModule, SharedModule],
})
export class LayoutModule {}
