import {ITableHeaders} from '../models/table-header.interface';

export const DOCUMENT_HEADER: ITableHeaders[] = [
  {key: 'imgUrl', colSize: 's'},
  {key: 'organizationName'},
  {key: 'eventName'},
  {key: 'paymentFee', colSize: 'm'},
  {key: 'startDate', colSize: 'm'},
  {key: 'endDate', colSize: 'm'},
  {key: 'action', colSize: 'xs'},
];

export const DOCUMENT_INFO_HEADER: ITableHeaders[] = [
  {key: 'eventSubject'},
  {key: 'eventType'},
  {key: 'lotsCount'},
  {key: 'creationDate'},
  {key: 'additionalInfo'},
];
export const DOCUMENT_DATE_HEADER: ITableHeaders[] = [{key: 'startDate'}, {key: 'envelopDate'}, {key: 'endDate'}, {key: 'complianceDate'}];

export const DOCUMENT_CONTACT_HEADER: ITableHeaders[] = [{key: 'name'}, {key: 'contactNumber'}, {key: 'position'}, {key: 'email'}];

export const LOT_SETTING_HEADER: ITableHeaders[] = [{key: 'deliveryTerms'}, {key: 'deliveryPeriod'}, {key: 'warrantyPeriod'}, {key: 'paymentTerms'}];

export const CRITERIA_HEADER: ITableHeaders[] = [{key: 'name'}, {key: 'description'}];

export const BOM_HEADER: ITableHeaders[] = [
  {key: 'index', colSize: 'xs'},
  {key: 'name'},
  {key: 'description'},
  {key: 'qty', colSize: 'm'},
  {key: 'uom', colSize: 'm'},
];
