interface ICriteria {
  id: string;
  name: string;
  description: string;
  weight?: number;
}

interface IBoMS {
  id: string;
  name: string;
  description: string;
  qty: number;
  uom: string;
}

interface ISection {
  id: string;
  name: string;
  isPriceSection: boolean;
  weight?: string;
  bom?: IBoMS[];
  criteria: ICriteria[];
}

export interface IEnvelope {
  id: string;
  hasWeight: boolean,
  sections: ISection[];
}
