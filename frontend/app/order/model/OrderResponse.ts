import {Order} from './Order';

export interface OrderResponse {
  page: number;
  pageSize: number;
  total: number;
  count: number;
  items: Order[];
}
