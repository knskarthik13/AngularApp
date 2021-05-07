import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import{Product} from '../models/product.model'

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {

  //create to recieve to data from parent
  @Input() productObj:Product;

  //create output custom event
  @Output() myEvent=new EventEmitter();

  sendProductDetailsToParent(productTitle){
    //emit data to parent
    this.myEvent.emit(productTitle);
  }
}
