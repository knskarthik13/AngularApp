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
    return this.hc.get<Product[]>("http://localhost:3000/babycare")
 }
 createNewbabycare(babycareObj):Observable<any>{
  return this.hc.post("http://localhost:3000/babycare",babycareObj)
}

//update babycar
updatebabycare(modifiedbabycareOj):Observable<any>{
  return this.hc.put("http://localhost:3000/babycare/"+modifiedbabycareOj.id,modifiedbabycareOj)
}

//delete babycar
deletebabycare(id):Observable<any>{
  console.log("id is ",id)
  return this.hc.delete("http://localhost:3000/babycare/"+id)
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
