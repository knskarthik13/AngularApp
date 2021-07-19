import { Pipe, PipeTransform } from '@angular/core';
import { MobilesComponent } from './mobiles/mobiles.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[],searchTerm:string):any[]{
    if (!items ||!searchTerm){
      return items;
    }
    else{
      return items.filter(itemObj=>itemObj.productTitle.toLowerCase().indexOf(searchTerm.toLocaleLowerCase())!==-1)
    }
  }

}
