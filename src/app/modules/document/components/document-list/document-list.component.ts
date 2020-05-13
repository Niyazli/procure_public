import {Component, OnInit} from '@angular/core';
import {DocumentService} from '../../services/document.service';
import {ITableHeaders} from '../../../widget/shared/data-table/models/table-header.interface';
import {DOCUMENT_HEADER} from '../../../widget/shared/data-table/const/table-headers.const';
import {DocumentModel} from '../../models/document.model';
import {DOCUMENT} from '../../const/document.const';
import {Router} from '@angular/router';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss'],
})
export class DocumentListComponent implements OnInit {
  loadingState: boolean;
  documents: DocumentModel[];
  documentHeader: ITableHeaders[] = DOCUMENT_HEADER;
  constructor(public documentService: DocumentService, private router: Router) {}

  ngOnInit() {
    this.loadingState = true;

    setTimeout(() => {
      this.documents = DOCUMENT;
      this.loadingState = false;
    }, 5000);
  }

  navigate(id: string) {
    this.router.navigate([`event/${id}`]);
  }
}
