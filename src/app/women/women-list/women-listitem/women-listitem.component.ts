import { Component, OnInit, Input } from '@angular/core';
import { WomenItemModel } from 'src/app/shared/women-item.model';
import { WomenSizeService } from 'src/app/shared/women-size.service';

@Component({
  selector: 'app-women-listitem',
  templateUrl: './women-listitem.component.html',
  styleUrls: ['./women-listitem.component.css']
})
export class WomenListitemComponent implements OnInit {
@Input() womenItem: WomenItemModel;
  constructor(private womenSizeService: WomenSizeService) { }

  ngOnInit(): void {
  }
  onClick(event: any){
    this.womenItem.quantity = event.target.value;
    this.womenItem.total = this.womenItem.price * this.womenItem.quantity;
  }
  getSize(type: string){
    return this.womenSizeService.getSize(type);
  }
}
