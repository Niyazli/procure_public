import {ILotSetting} from './lot-setting.interface';
import {IEnvelope} from './envelope.interface';

export class LotModel {
  id: string;
  lotSettings: ILotSetting;
  paymentFee: number;
  categories: string[];
  additionalInfo: string;
  envelopes: IEnvelope[];
}
