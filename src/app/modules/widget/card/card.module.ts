import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardRegisterComponent} from './components/card-register/card-register.component';
import {MaterialModule} from '../../material/material.module';
import {SharedModule} from '../shared/shared.module';
import { CardTenderTypeComponent } from './components/card-tender-type/card-tender-type.component';
import { CardDocumentsComponent } from './components/card-documents/card-documents.component';
import { CardOrganizationComponent } from './components/card-organization/card-organization.component';
import {RouterModule} from '@angular/router';
import { CardAvatarComponent } from './components/card-avatar/card-avatar.component';
import { CardSupplierComponent } from './components/card-supplier/card-supplier.component';

@NgModule({
  declarations: [CardRegisterComponent, CardTenderTypeComponent, CardDocumentsComponent, CardOrganizationComponent, CardAvatarComponent, CardSupplierComponent],
  exports: [CardRegisterComponent, CardTenderTypeComponent, CardDocumentsComponent, CardAvatarComponent],
    imports: [CommonModule, MaterialModule, SharedModule, RouterModule],
})
export class CardModule {}
