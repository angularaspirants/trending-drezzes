import { Component, OnInit } from '@angular/core';
import { CartItemService } from '../shared/cart-item.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
image="../assets/cartitem.jpg";
cartItemCount = 0;
  constructor(private cartitemService: CartItemService) { }

  ngOnInit(): void {
    this.cartItemCount = this.cartitemService.getItemCount();
  }

}
