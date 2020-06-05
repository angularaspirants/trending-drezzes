import { Component, OnInit } from '@angular/core';
import { MenModel } from 'src/app/shared/men.model';
import { MenService } from 'src/app/shared/men-service';
import { MenSizeService } from 'src/app/shared/men-size.service';

@Component({
    selector: 'app-men-list',
    templateUrl: './men-list.component.html',
    styleUrls: ['./men-list.component.css']
})
export class MenListComponent implements OnInit{
    menItems: MenModel[];
    constructor(private menService: MenService, private menSizeService: MenSizeService){}
    ngOnInit(): void {
        this.menItems = this.menService.getMenItems();
    }
    getSize(x: string){
        return this.menSizeService.getSize(x);
    }


}