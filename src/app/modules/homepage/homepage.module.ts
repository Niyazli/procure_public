import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomepageRoutingModule} from './homepage-routing.module';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {HomepageSubheaderComponent} from './components/homepage-subheader/homepage-subheader.component';
import {MaterialModule} from '../material/material.module';
import {CardModule} from '../widget/card/card.module';
import {HomepageStatisticsComponent} from './components/homepage-statistics/homepage-statistics.component';
import {DocumentModule} from '../document/document.module';
import {FilteringModule} from '../widget/filtering/filtering.module';
import { HomepageCatalogueComponent } from './components/homepage-catalogue/homepage-catalogue.component';

@NgModule({
  declarations: [HomepageComponent, HomepageSubheaderComponent, HomepageStatisticsComponent, HomepageCatalogueComponent],
  imports: [CommonModule, HomepageRoutingModule, MaterialModule, CardModule, DocumentModule, FilteringModule],
})
export class HomepageModule {}
