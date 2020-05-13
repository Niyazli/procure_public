import {Component, OnInit} from '@angular/core';
import {LayoutService} from '../../../layout/services/layout.service';
import {EventSubheaderComponent} from '../../components/event-subheader/event-subheader.component';
import {DocumentService} from '../../services/document.service';

@Component({
  selector: 'app-events-page',
  template: `
    <section class="row">
      <div class="col-12">
        <app-document-list>
          <app-filtering-advanced></app-filtering-advanced>
        </app-document-list>
      </div>
    </section>
  `,
  styleUrls: ['./events-page.component.scss'],
})
export class EventsPageComponent implements OnInit {
  constructor(private layoutService: LayoutService, private documentService: DocumentService) {}

  ngOnInit(): void {
    this.layoutService.setSubheaderContent(EventSubheaderComponent);
    this.documentService.changeListType(true);
  }
}
