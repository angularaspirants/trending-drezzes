import { Injectable } from '@angular/core';
import { MenModel } from './men.model';

@Injectable({
  providedIn: 'root'
})
export class MenService {
  menItems: MenModel[] = [
    new MenModel('Casual Shirt', 'https://ae01.alicdn.com/kf/HTB1uskXOpXXXXXAXFXXq6xXFXXXg/Pioneer-Camp-casual-shirt-men-brand-clothing-2019-new-long-sleeve-slim-fit-solid-male-shirt.jpg', '$10.99'),
    new MenModel('Formal Shirt', 'https://lh3.googleusercontent.com/proxy/vtAqesLBgj_lWN3hElhcfbttonGEpTIIoOZ769HCWAWYJ1LOcbFnHGto0Pj8Bli9cFrfc5XMC7hgHSOUhRm2nTaDNis67rUJeSfOhE2B8U3dk8sbpauEcw9OBkl2jfLkiHbh00z4vM8D4VLI', '$20.99'),
    new MenModel('Jeans', 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/408487/item/goods_68_408487.jpg?width=2000', '$25')
  ]

  constructor() { }
}
