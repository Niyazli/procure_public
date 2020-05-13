import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {AdvancedDocumentModel} from '../../models/advanced-document.model';
import {DOCUMENT_DATE_HEADER} from '../../../widget/shared/data-table/const/table-headers.const';

@Component({
  selector: 'app-event-date-table',
  templateUrl: './event-date-table.component.html',
  styleUrls: ['./event-date-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDateTableComponent implements OnInit {
  @Input() document: AdvancedDocumentModel;
  tableHeader = DOCUMENT_DATE_HEADER;
  tableData: any[];

  constructor() {}

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData(): void {
    const keys = this.tableHeader.map(h => h.key);
    const data = {};
    keys.forEach(k => {
      data[k] = [this.document[k]];
    });
    this.tableData = [data];
  }
}
