import { Component, OnInit } from '@angular/core';
import { CartItemService } from 'src/app/shared/cart-item.service';
import { WomenItemModel } from 'src/app/shared/women-item.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  cartItems = [];
 
  constructor(private cartItemService: CartItemService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cartItems = this.cartItemService.getCartItems();
    });
  }

}
