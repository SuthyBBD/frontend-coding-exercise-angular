import {Routes} from '@angular/router';
import {OrderListComponent} from './order-list/order-list.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {OrderComponent} from './order.component';

export const orderRoutes: Routes = [
  {
    path: 'orders',
    component: OrderComponent,
    children: [
      {path: '', component: OrderListComponent},
      {path: ':orderId', component: OrderDetailComponent}
    ]
  }];
