import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { Product } from '../models/product.model';
import { TelevisiondataService } from '../televisiondata.service';
@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit {
  televisions:Product[]=[]
  constructor(private dsObj:TelevisiondataService){}
  
  ngOnInit(){
    this.dsObj.getTelevisionsData().subscribe(
      data=>{
        this.televisions=data;
      },
      err=>{
        console.log("err is ",err)
      }
      )
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
