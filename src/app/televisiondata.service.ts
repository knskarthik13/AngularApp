import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Product} from './models/product.model'

@Injectable({
  providedIn: 'root'
})
export class TelevisiondataService {
 //inject HttpClient service object
 constructor(private hc:HttpClient) { }

 getTelevisionsData():Observable<Product[]>{
     //http get
    return this.hc.get<Product[]>("http://localhost:3000/televisions")
 }

}
