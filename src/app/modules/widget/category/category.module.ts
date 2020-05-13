import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExpansionCpvTreeComponent} from './components/expansion-cpv-tree/expansion-cpv-tree.component';
import {CpvRecursionModelComponent} from './components/expansion-cpv-tree/cpv-recursion-model/cpv-recursion-model.component';
import {MaterialModule} from '../../material/material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ExpansionCpvTreeComponent, CpvRecursionModelComponent],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [
    ExpansionCpvTreeComponent
  ]
})
export class CategoryModule {}
