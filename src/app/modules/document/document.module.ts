import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DocumentRoutingModule} from './document-routing.module';
import {DocumentPageComponent} from './pages/document-page/document-page.component';
import {DocumentListComponent} from './components/document-list/document-list.component';
import {CardModule} from '../widget/card/card.module';
import {SharedModule} from '../widget/shared/shared.module';
import {MaterialModule} from '../material/material.module';
import {FilteringModule} from '../widget/filtering/filtering.module';
import {EventsPageComponent} from './pages/events-page/events-page.component';
import {EventSubheaderComponent} from './components/event-subheader/event-subheader.component';
import {DocumentWrapperComponent} from './document-wrapper.component';
import { EventInfoTableComponent } from './components/event-info-table/event-info-table.component';
import { EventDateTableComponent } from './components/event-date-table/event-date-table.component';
import {LotModule} from './lot/lot.module';

@NgModule({
  declarations: [DocumentPageComponent, DocumentListComponent, EventsPageComponent, EventSubheaderComponent, DocumentWrapperComponent, EventInfoTableComponent, EventDateTableComponent],
  exports: [DocumentListComponent],
  imports: [CommonModule, DocumentRoutingModule, CardModule, SharedModule, MaterialModule, FilteringModule, LotModule],
})
export class DocumentModule {}
