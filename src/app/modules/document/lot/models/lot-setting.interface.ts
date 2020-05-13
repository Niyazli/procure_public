export interface ILotSetting {
  deliveryTerms: ISetting;
  deliveryPeriod: ISetting;
  warrantyPeriod: ISetting;
  paymentTerms: ISetting;
}

interface ISetting {
  settingType: number | string;
  description: string;
  isRequired: boolean;
}
