import { Pipe, PipeTransform } from '@angular/core';
import { MobilesComponent } from './mobiles/mobiles.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(mobiles: any[],searchTerm:string):any[]{
    if (!mobiles ||!searchTerm){
      return mobiles;
    }
    else{
      return mobiles.filter(mobileObj=>mobileObj.productTitle.toLowerCase().indexOf(searchTerm.toLocaleLowerCase())!==-1)
    }
  }

}
