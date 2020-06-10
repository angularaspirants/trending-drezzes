import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.css']
})
export class DeliveryInfoComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  streetAddress:string = '';
  city:string = '';
  zipCode:number;
  phoneNumber:number;




  constructor() { }

  ngOnInit(): void {
  }

}
