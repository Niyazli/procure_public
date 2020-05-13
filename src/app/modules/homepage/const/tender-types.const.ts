import {ITenderType} from '../models/tender-type.interface';

export const TENDER_TYPES: ITenderType[] = [
  {
    eventCount: 16,
    imgUrl: 'assets/images/tender-types/aze.svg',
    isEnabled: true,
    label: 'GOVERNMENT TENDERS',
  },
  {
    eventCount: 0,
    imgUrl: 'assets/images/tender-types/auction.svg',
    isEnabled: false,
    label: 'COMMERCIAL TENDERS',
  },
  {
    eventCount: 0,
    imgUrl: 'assets/images/tender-types/bank.svg',
    isEnabled: false,
    label: 'ASSET SALES',
  },
  {
    eventCount: 0,
    imgUrl: 'assets/images/tender-types/market.svg',
    isEnabled: false,
    label: 'MARKET',
  },
];
