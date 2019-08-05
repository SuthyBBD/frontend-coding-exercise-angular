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
  lateReason: string;
  orderStatus: string;
  packaging: string;
  servingStyle: string;
  paymentType: string;
  roundedVat: string;
  roundedTotal: string;
  roundedItems: string;
  roundedVatItems: string;

  constructor(private route: ActivatedRoute, private orderService: OrderService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.getOrder(params['orderId']);
    });
  }

  getOrder(orderId: number) {
    this.orderService.getOrderById(orderId).subscribe(
      (order) => {
        this.order = order;
        if (order) {
          this.getLateReason();
          this.getDeliveryDate();
          this.getPackaging();
          this.getServingStyle();
          this.getPaymentMethod();
          this.roundedVat = this.roundAmount(this.order.price.vatAmount);
          this.roundedTotal = this.roundAmount(this.order.price.total);
          this.roundedItems = this.roundAmount(this.order.price.items);
          this.roundedVatItems = this.roundAmount(this.order.price.vatableItems);
        }
      });
  }

  roundAmount(amount: any): string { // Only display to customer, I assume the stored value (full decimal) will be sent in invoices
    amount = Number(Math.round(parseFloat(amount + 'e' + 2)) + 'e-' + 2) + '';
    const decimal = amount.split('.')[1];
    if (decimal !== null && decimal !== undefined && decimal.length < 2) {
      amount += '0';
      return amount;
    }
    return amount;
  }

  getPaymentMethod() {
    switch (this.order.paymentType) {
      case 'PAY_ON_ACCOUNT':
        this.paymentType = 'account';
        break;
      case 'CARD':
        this.paymentType = 'card';
        break;
      case 'CASH':
        this.paymentType = 'cash';
        break;
    }
  }

  getDeliveryDate() {
    if (this.order.deliveredAt) {
      this.orderStatus = 'Completed on';
    } else {
      this.orderStatus = 'Scheduled for';
    }
  }

  getServingStyle() {
    switch (this.order.servingStyle) {
      case 'INDIVIDUAL_PORTIONS':
        this.servingStyle = 'Individual portions';
        break;
      case 'BUFFET':
        this.servingStyle = 'Buffet';
        break;
      default:
        break;
    }
  }

  getPackaging() {
    switch (this.order.packaging) {
      case 'COLDBOX':
        this.packaging = 'cold box';
        break;
      case 'HOTBOX':
        this.packaging = 'hot box';
        break;
      case 'VENDOR_PROVIDED':
        this.packaging = 'vendor provided';
        break;
      default:
        break;
    }
  }

  getLateReason() {
    switch (this.order.lateReason) {
      case 'TRAFFIC':
        this.lateReason = 'traffic on route';
        break;
      case 'VENDOR_LATE':
        this.lateReason = 'vendor being late';
        break;
      case 'BAD_INSTRUCTIONS':
        this.lateReason = 'poor instructions given';
        break;
      case 'DRIVER_LATE_FOR_PICKUP':
        this.lateReason = 'being late for the pickup';
        break;
      default:
        break;
    }
  }


}
