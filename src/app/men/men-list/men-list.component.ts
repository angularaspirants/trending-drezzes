import { Component, OnInit } from '@angular/core';
import { MenModel } from 'src/app/shared/men.model';
import { MenService } from 'src/app/shared/men-service';

@Component({
    selector: 'app-men-list',
    templateUrl: './men-list.component.html',
    styleUrls: ['./men-list.component.css']
})
export class MenListComponent implements OnInit{
    menItems: MenModel[];
    constructor(private menservice: MenService){}
    ngOnInit(): void {
        this.menItems = this.menservice.menItems;
    }


}