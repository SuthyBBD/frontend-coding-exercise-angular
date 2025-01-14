import {Component, OnInit} from '@angular/core';
import {OrderService} from '../service/order.service';
import {Order} from '../model/Order';
import {OrderResponse} from '../model/OrderResponse';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders: Order[];
  page: number;
  pages: number;

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getOrders().subscribe(
      (orderResponse: OrderResponse) => {
        this.orders = orderResponse.items;
        console.log(this.orders);
        this.page = 1;
        this.pages = orderResponse.total / orderResponse.pageSize;
      });

  }

  prev() {
    if (this.page > 1) {
      this.page -= 1;
      this.orderService.getOrders(this.page + '').subscribe(
        (orderResponse: OrderResponse) => {
          this.orders = orderResponse.items;
        });
    }
  }

  next() {
    if (this.page < this.pages) {
      this.page += 1;
      this.orderService.getOrders(this.page + '').subscribe(
        (orderResponse: OrderResponse) => {
          this.orders = orderResponse.items;
        });
    }
  }

}
