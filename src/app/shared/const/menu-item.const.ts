import {IMenuItem} from '../models/menu-item.interface';

export const MENU_ITEMS: IMenuItem[] = [
  {
    label: 'Events',
    route: 'event/list',
  },
  {
    label: 'Companies catalogue',
    route: 'company/list',
  },
  {
    label: 'Products & Services',
    route: 'product/service',
  },
];
