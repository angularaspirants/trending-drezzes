import { Injectable } from '@angular/core';

    @Injectable({
        providedIn: 'root'
      })

export class KidsSizeService {

    shirtSize = ['S','M', 'L'];
    pantSize = [6,8,10,12];


    constructor(){

    }

    public getSize(type:string){
        
        if (type==='Shirt'){
            return this.shirtSize
        }
        else if (type==='Trousers') {
            return this.pantSize
        }
    }
}