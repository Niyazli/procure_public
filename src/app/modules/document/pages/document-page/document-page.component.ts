import {Component, OnInit} from '@angular/core';
import {LayoutService} from '../../../layout/services/layout.service';
import {CardOrganizationComponent} from '../../../widget/card/components/card-organization/card-organization.component';
import {CardService} from '../../../widget/card/services/card.service';
import {ActivatedRoute} from '@angular/router';
import {AdvancedDocumentModel} from '../../models/advanced-document.model';
import {ADVANCED_DOCUMENT} from '../../const/advanced-document.const';
import {ITableHeaders} from '../../../widget/shared/data-table/models/table-header.interface';
import {DOCUMENT_CONTACT_HEADER} from '../../../widget/shared/data-table/const/table-headers.const';

@Component({
  selector: 'app-document-page',
  templateUrl: './document-page.component.html',
  styleUrls: ['./document-page.component.scss'],
})
export class DocumentPageComponent implements OnInit {
  documentId: string;
  document: AdvancedDocumentModel;
  contactPersonHeader: ITableHeaders[];
  constructor(private layoutService: LayoutService, private cardService: CardService, private activateRoutes: ActivatedRoute) {}

  ngOnInit(): void {
    this.activateRoutes.params.subscribe(params => (this.documentId = params.id));
    this.layoutService.setSubheaderContent(CardOrganizationComponent);
    setTimeout(() => {
      this.document = ADVANCED_DOCUMENT.find(d => d.id === this.documentId);
      this.document.lotsCount = this.document.lots.length;
      this.cardService.setOrganizationCardData(this.document.organization);
      this.contactPersonHeader = DOCUMENT_CONTACT_HEADER;
    }, 1000);
  }
}
