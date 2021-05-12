import { Injectable } from '@angular/core';
import { Product} from './models/product.model'

@Injectable({
  providedIn: 'root'
})
export class CameradataService {

  constructor() { }

  private cameras:Product[]=[
    {
      productTitle:"Canon EOS 1500D",
      description:"Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens",
      productImage:"https://m.media-amazon.com/images/I/914hFeTU2-L._AC_UL480_FMwebp_QL65_.jpg"
      },
      {
      productTitle:"Canon EOS 200D ",
      description:"Canon EOS 200D II 24.1MP Digital SLR Camera + EF-S 18-55mm f4 is STM Lens (Black)",
      productImage:"https://m.media-amazon.com/images/I/81cEKnH692L._AC_UL480_FMwebp_QL65_.jpg"
      },
      
      {
      productTitle:"Canon PowerShot SX540HS",
      description:"Canon PowerShot SX540HS 20.3MP Digital Camera with 50x Optical Zoom (Black)",
      productImage:"https://m.media-amazon.com/images/I/71Xp-K4MMBL._AC_UL480_FMwebp_QL65_.jpg"
      },
      
      {
      productTitle:"Canon M50",
      description:"Canon M50 Mark II 15-45mm f3.5-6.3 is STM (Real-Time Eye Auto Focus, Eye AF, Tiltable LCD, Low Light Camera) - Black",
      productImage:"https://m.media-amazon.com/images/I/51bHhi0DMiL._AC_UL480_FMwebp_QL65_.jpg"
      },
      {
        productTitle:"Sony Alpha ILCE",
        description:"Sony Alpha ILCE 6000L 24.3 MP Mirrorless Digital SLR Camera with 16-50 mm (APS-C Sensor, Fast Auto Focus, Eye AF, Light Weight) - Black",
        productImage:"https://m.media-amazon.com/images/I/71vLVOCKD+L._AC_UL480_FMwebp_QL65_.jpg"
        },
        {
        productTitle:"Sony Alpha ILCE-7M3K",
        description:"Sony Alpha ILCE-7M3K Full-Frame 24.2MP Mirrorless Camera with 28-70mm Zoom Lens(4K Full Frame,Real-Time Eye Auto Focus,Low Light Camera) Black",
        productImage:"https://m.media-amazon.com/images/I/71CWotTQT4L._AC_UL480_FMwebp_QL65_.jpg"
        }
  ];


  getCamerasData(){
    return this.cameras;
  }

}
