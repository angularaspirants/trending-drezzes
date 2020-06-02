import { WomenModel } from './women-model';

export class WomenService{
    womenItems: WomenModel[] = [new WomenModel('shirt',45,'../../assets/t-shirt.jpg'),
                                new WomenModel('jeans',34,'../../assets/jeans.jpg')
    ];
}