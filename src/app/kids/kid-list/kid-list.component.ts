import { Component, OnInit } from '@angular/core';
import { KidItemModel } from 'src/app/shared/kid-item.model';
import { KidItemService } from 'src/app/shared/kid-item.service';
import { KidsSizeService } from 'src/app/shared/kid-size.service';




@Component({
  selector: 'app-kid-list',
  templateUrl: './kid-list.component.html',
  styleUrls: ['./kid-list.component.css']
})
export class KidListComponent implements OnInit {
  kidsItem:KidItemModel[] 
 
  constructor(private service: KidItemService, private kidsSizeService: KidsSizeService ) { }

  ngOnInit() {
    this.kidsItem=this.service.items;
  }

  getKidSize(type:string){
    return this.kidsSizeService.getSize(type);
  }

}
