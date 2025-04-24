import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderComponent } from './order/order.component';

@Component({
  selector: 'app-root',
  imports: [OrderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'order-tracker';
}
