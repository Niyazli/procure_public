import {IOrganization} from './organization.interface';

export class DocumentModel {
  id: string;
  eventName: string;
  organization: IOrganization;
  organizationName?: string;
  imgUrl: string;
  paymentFee: number;
  currency: string;
  startDate: number;
  endDate: number;
  envelopDate?: number;
  complianceDate?: number;
  status?: string;
  eventType?: string;
}
