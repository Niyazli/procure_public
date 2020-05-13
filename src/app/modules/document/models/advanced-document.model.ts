import {DocumentModel} from './document.model';
import {IContact} from './contact.interface';
import {LotModel} from '../lot/models/lot.model';

export class AdvancedDocumentModel extends DocumentModel {
  eventSubject?: string;
  creationDate: number;
  additionalInfo?: string;
  contactPerson: IContact;
  lots: LotModel[];
  lotsCount?: number;
}
