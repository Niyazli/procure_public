import {Component, Input, OnInit} from '@angular/core';
import {IEnvelope} from '../../models/envelope.interface';
import {ITableHeaders} from '../../../../widget/shared/data-table/models/table-header.interface';
import {BOM_HEADER, CRITERIA_HEADER} from '../../../../widget/shared/data-table/const/table-headers.const';

@Component({
  selector: 'app-lot-envelopes',
  templateUrl: './lot-envelopes.component.html',
  styleUrls: ['./lot-envelopes.component.scss'],
})
export class LotEnvelopesComponent implements OnInit {
  @Input() envelopes: IEnvelope[];
  bomHeader: ITableHeaders[] = BOM_HEADER;

  constructor() {}

  ngOnInit(): void {}

  getTableHeader(envelop: IEnvelope): ITableHeaders[] {
    const col: ITableHeaders = {key: 'weight', colSize: 'm'};
    if (envelop.hasWeight) {
      return [...CRITERIA_HEADER, col];
    } else {
      return CRITERIA_HEADER;
    }
  }
}
