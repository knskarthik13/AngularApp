import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product} from './models/product.model'

@Injectable({
  providedIn: 'root'
})
export class CameradataService {

  //inject HttpClient service object
 constructor(private hc:HttpClient) { }

 getCamerasData():Observable<Product[]>{
     //http get
    return this.hc.get<Product[]>("http://localhost:3000/cameras")
 }

}
