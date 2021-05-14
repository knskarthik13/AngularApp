import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  data:any;
  getData(){
    return this.data;
  }

  setData(value){
      this.data=value;
  }
  private mobiles:Product[]=[

    {
    productTitle:"Samsung Galaxy M02s",
    description:"Samsung Galaxy M02s (Blue,4GB RAM, 64GB Storage) | 5000 mAh | Triple Camera",
    productImage:"https://www.sathya.in/Media/Default/Thumbs/0038/0038136-vivo-s1-pro-black8gb-ram-128gb-storage-250.jpg"
    },
    {
    productTitle:"Samsung Galaxy M12",
    description:"Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor",
    productImage:"https://priceintanzania.com/wp-content/uploads/2019/04/Samsung-Galaxy-A70-Price-in-Tanzania.jpg"
    },
    
    {
    productTitle:"Redmi Note 9 Pro",
    description:"Redmi Note 9 Pro (Interstellar Black, 4GB RAM, 64GB Storage)- Latest 8nm Snapdragon 720G",
    productImage:"https://5.imimg.com/data5/AW/IX/GLADMIN-53160395/galaxy-s-500x500.png"
    },
    
    {
    productTitle:"Iphone-11",
    description:"Iphone-11 6.1-inch (15.5 cm) Liquid Retina HD LCD display with True Tone | Dual 12MP cameras ",
    productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnUpuHOI1WPovC3CUemRnhJW4_frjhQy6ow&usqp=CAU"
    },
    
    {
    productTitle:"OnePlus Nord 5G",
    description:"OnePlus Nord 5G (Blue Marble, 12GB RAM, 256GB Storage) 6.44-inch 90Hz fluid Amoled display ",
    productImage:"https://670354.smushcdn.com/2260778/wp-content/uploads/2021/03/AMZ101-2.jpg"
    },
    
    {
    productTitle:"Google Pixel 4a",
    description:"Google Pixel 4a 5G (Just Black, 6GB RAM, 128GB Storage) With HD Duo screen sharing",
    productImage:"https://m.media-amazon.com/images/I/71C0OH4WfpL._AC_UY327_FMwebp_QL65_.jpg"
    }
    
    ]


    getMobilesData(): Product[]{
     return this.mobiles;
    }
}
