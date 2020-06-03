import { Component, OnInit } from '@angular/core';
import { WomenItemService } from 'src/app/shared/women-item.service';
import { WomenItemModel } from 'src/app/shared/women-item.model';

@Component({
  selector: 'app-women-list',
  templateUrl: './women-list.component.html',
  styleUrls: ['./women-list.component.css'],
  providers: [WomenItemService],
})
export class WomenListComponent implements OnInit {
womenItems = [new WomenItemModel('shirt','$45','../../assets/t-shirt.jpg')];
totalPrice: number;
quantity: number;
  constructor(private womenItemService: WomenItemService) { }

  ngOnInit(): void {
    this.womenItems = this.womenItemService.womenItems;
    console.log(this.womenItems);
  }
  onKeyUp(event: any){
    this.totalPrice = event.target.value * 45.99;
  }
}
