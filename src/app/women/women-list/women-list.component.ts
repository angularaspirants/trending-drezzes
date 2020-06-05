import { Component, OnInit } from '@angular/core';
import { WomenItemService } from 'src/app/shared/women-item.service';
import { WomenItemModel } from 'src/app/shared/women-item.model';
import { WomenSizeService } from 'src/app/shared/women-size.service';

@Component({
  selector: 'app-women-list',
  templateUrl: './women-list.component.html',
  styleUrls: ['./women-list.component.css'],
  providers: [WomenItemService, WomenSizeService],
})
export class WomenListComponent implements OnInit {
womenItems = [new WomenItemModel('shirt','$45','../../assets/t-shirt.jpg')];
totalPrice: number;
quantity: number;
  constructor(private womenItemService: WomenItemService, private womenSizeService: WomenSizeService) { }

  ngOnInit(): void {
    this.womenItems = this.womenItemService.womenItems;
  }
  // onKeyUp(event: any){
  //   this.totalPrice = event.target.value * 45.99;
  // }
  getSize(type: string){
    return this.womenSizeService.getSize(type);

  }
  onKeyUp(event: any){
    this.totalPrice = event.target.value * 11;
  }
}
