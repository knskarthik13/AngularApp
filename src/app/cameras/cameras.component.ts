import { Component, OnInit } from '@angular/core';
import { CameradataService} from '../cameradata.service'
import { Product } from '../models/product.model';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent implements OnInit {

  cameras:Product[]=[]
  constructor(private csObj:CameradataService) { }

  ngOnInit(): void {
    this.cameras=this.csObj.getCamerasData()
  }
  productSentByChild=[];
  productCount:number=0;

  getProductDetailsFromChild(productTitle){
    if (!this.productSentByChild.includes(productTitle)){
    this.productSentByChild.push(productTitle);
    this.productCount++;
    }
  }

}
