import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  imports: [CommonModule, FormsModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent {
  order = {
    name: '',
    price: 0,
    quantity: 0
  };

  orders: any[] = [];

  addOrder() {
    this.orders.push({ ...this.order });
    this.order = { name: '', price: 0, quantity: 1 }; // reset
  }

  getTotal(): number {
    return this.orders.reduce((sum, order) => sum + (order.price * order.quantity), 0);
  }

  removeOrder(index: number) {
    this.orders.splice(index, 1);
  }

}
