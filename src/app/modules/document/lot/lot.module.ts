import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LotInfoTableComponent } from './components/lot-info-table/lot-info-table.component';
import { LotEnvelopesComponent } from './components/lot-envelopes/lot-envelopes.component';
import { LotBomComponent } from './components/lot-bom/lot-bom.component';
import { LotWrapperComponent } from './lot-wrapper.component';
import {MaterialModule} from '../../material/material.module';
import {SharedModule} from '../../widget/shared/shared.module';



@NgModule({
  declarations: [LotInfoTableComponent, LotEnvelopesComponent, LotBomComponent, LotWrapperComponent],
  exports: [
    LotWrapperComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        SharedModule
    ]
})
export class LotModule { }
