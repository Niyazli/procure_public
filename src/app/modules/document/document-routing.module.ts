import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EventsPageComponent} from './pages/events-page/events-page.component';
import {DocumentPageComponent} from './pages/document-page/document-page.component';
import {DocumentWrapperComponent} from './document-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentWrapperComponent,
    children: [
      {
        path: 'list',
        component: EventsPageComponent,
      },
      {
        path: ':id',
        component: DocumentPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentRoutingModule {}
