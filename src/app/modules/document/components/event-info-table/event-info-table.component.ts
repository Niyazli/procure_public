import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {AdvancedDocumentModel} from '../../models/advanced-document.model';
import {DOCUMENT_INFO_HEADER} from '../../../widget/shared/data-table/const/table-headers.const';

@Component({
  selector: 'app-event-info-table',
  template: `
    <app-data-table
      [tableBordered]="true"
      tableTitle="ANNUAL INFORMATION ABOUT EVENT"
      [tableData]="tableData"
      [tableHeaders]="tableHeader"
      [isHorizontalTable]="true"
    ></app-data-table>
  `,
  styleUrls: ['./event-info-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventInfoTableComponent implements OnInit {
  @Input() document: AdvancedDocumentModel;
  tableHeader = DOCUMENT_INFO_HEADER;
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
