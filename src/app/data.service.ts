import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //inject HttpClient service object
  constructor(private hc:HttpClient) { }



    getMobilesData():Observable<Product[]>{
        //http get
       return this.hc.get<Product[]>("http://localhost:3000/healthcare")
    }
    //to save /create new mobile
    createNewMobile(mobileObj):Observable<any>{
      return this.hc.post("http://localhost:3000/healthcare",mobileObj)
    }

    //update mobile
    updateMobile(modifiedMobileOj):Observable<any>{
      return this.hc.put("http://localhost:3000/healthcare/"+modifiedMobileOj.id,modifiedMobileOj)
    }

    //delete mobile
    deleteMobile(id):Observable<any>{
      console.log("id is ",id)
      return this.hc.delete("http://localhost:3000/healthcare/"+id)
    }
    //tocheck login status
    userLoginStatus():boolean{
      if(localStorage.getItem("username")==null){
        return false
      }
      else{
        return true
      }
    }
    userLogout(){
      localStorage.clear();
    }
  
}

