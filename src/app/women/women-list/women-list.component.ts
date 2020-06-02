import { Component, OnInit } from '@angular/core';
import { WomenService } from 'src/app/shared/women-service';
import { WomenModel } from 'src/app/shared/women-model';

@Component({
  selector: 'app-women-list',
  templateUrl: './women-list.component.html',
  styleUrls: ['./women-list.component.css'],
  providers: [WomenService],
})
export class WomenListComponent implements OnInit {
womenItems: WomenModel[];
  constructor(private womenService: WomenService) { }

  ngOnInit(): void {
    this.womenItems = this.womenService.womenItems;
    console.log(this.womenItems);
  }

}
