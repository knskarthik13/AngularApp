import { Injectable } from '@angular/core';
import {Product} from './models/product.model'

@Injectable({
  providedIn: 'root'
})
export class TelevisiondataService {

  constructor() { }
  private televisions:Product[]=[

    {
    productTitle:"Mi TV L32M5-AL",
    description:"Mi 80 cm (32 inches) HD Ready Android Smart LED TV 4A PRO|L32M5-AL (Black)",
    productImage:"https://m.media-amazon.com/images/I/513lkJuezIL.jpg"
    },
    {
    productTitle:"OnePlus TV 32Y1",
    description:"OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)",
    productImage:"https://m.media-amazon.com/images/I/51sIfBeY3sL.jpg"
    },
    
    {
    productTitle:"Samsung TV UA32T4340AKXXL",
    description:"Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340AKXXL",
    productImage:"https://m.media-amazon.com/images/I/51OmRL6TZLL.jpg"
    },
    
    {
    productTitle:"LG TV 32LM563BPTC",
    description:"LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray) (2020 Model)",
    productImage:"https://m.media-amazon.com/images/I/51STyIbNXuL.jpg"
    },
    
    {
    productTitle:"AmazonBasics TV AB32E10SS",
    description:"AmazonBasics 81cm (32 inches) Fire TV Edition HD Ready Smart LED TV AB32E10SS (Black)",
    productImage:"https://m.media-amazon.com/images/I/811j4G5MJML._AC_UL480_FMwebp_QL65_.jpg"
    },
    
    {
    productTitle:"Sony Bravia TV KDL-43W6603",
    description:"Sony Bravia 108 cm (43 inches) Full HD Smart LED TV KDL-43W6603 (Black) (2020 Model)",
    productImage:"https://m.media-amazon.com/images/I/81lpllAGcBL._AC_UL480_FMwebp_QL65_.jpg"
    }
    
    ]


    getTelevsionsData(): Product[]{
     return this.televisions;
    }
}
