import { WomenItemModel } from './women-item.model';

export class WomenItemService{
    womenItems: WomenItemModel[] = [new WomenItemModel('T-shirt','$45.99','../../assets/t-shirts.jpg'),
                                new WomenItemModel('Jeans','$34.00','../../assets/jeanss.jpg'),
                                new WomenItemModel('Skirt','$70.99','../../assets/skirt.jpg'),
                                new WomenItemModel('Chudi','$104.39','../../assets/chudi.jpg')
    ];
}