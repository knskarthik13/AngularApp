import { Component, OnInit } from '@angular/core';
import{ DataService}from '../data.service'
import { Product } from '../models/product.model';
@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit{
  
  mobiles:Product[]=[];
  //inject object dataservice class

  constructor(private dsObj:DataService){

  }
  ngOnInit(){
   this.dsObj.getMobilesData().subscribe
   (
     data=>{
       this.mobiles=data;
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
