import {Component, OnInit} from '@angular/core';
import {OrderService} from '../service/order.service';
import {ActivatedRoute} from '@angular/router';
import {Order} from '../model/Order';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  order: Order;

  constructor(private route: ActivatedRoute, private orderService: OrderService) {
    console.log('HELLO?');
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log('Params: ' + params['orderId']);
      this.getOrder(params['orderId']);
    });
  }

  getOrder(orderId: number) {
    this.orderService.getOrderById(orderId).subscribe(
      (order) => {
        console.log(order);
        this.order = order;
      });
  }

}
