import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../model/Order';

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.scss']
})
export class OrderListItemComponent implements OnInit {

  @Input() order: Order;
  @Input() page: number;
  roundedTotal: string;
  constructor() { }

  ngOnInit() {
    // rounding in edge case that amount has > 2 decimal places, I assume real transactions will include full decimal in amount
    this.roundedTotal = Number(Math.round(parseFloat(this.order.price.total + 'e' + 2)) + 'e-' + 2) + '';
    const decimal = this.roundedTotal.split('.')[1];
    if (decimal !== null && decimal !== undefined && decimal.length < 2 ) {
      this.roundedTotal += '0';
    }
  }

}
