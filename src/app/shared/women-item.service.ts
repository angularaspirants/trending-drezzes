import { WomenItemModel } from './women-item.model';

export class WomenItemService{
    womenItems: WomenItemModel[] = [new WomenItemModel('T-shirt','$25.99','../../assets/t-shirts.jpg'),
                                new WomenItemModel('Jeans','$15.99','../../assets/jeanss.jpg'),
                                new WomenItemModel('Skirt','$37.99','../../assets/skirt.jpg'),
                                new WomenItemModel('Sweater','$49.39','../../assets/sweaters.jpg')
    ];
}