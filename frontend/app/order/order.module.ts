import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {OrderListComponent} from './order-list/order-list.component';
import {OrderService} from './service/order.service';
import {CommonModule} from '@angular/common';
import {OrderListItemComponent} from './order-list-item/order-list-item.component';
import {RouterModule} from '@angular/router';
import {OrderComponent} from './order.component';
import {orderRoutes} from './order.routes';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {MapModule} from '../map/map.module';




@NgModule({
  declarations: [
    OrderListComponent,
    OrderListItemComponent,
    OrderDetailComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(orderRoutes),
    HttpClientModule,
    MapModule
  ],
  providers: [
    OrderService
  ]
})
export class OrderModule {
}
