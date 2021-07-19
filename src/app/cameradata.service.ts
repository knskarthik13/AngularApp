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
    return this.hc.get<Product[]>("http://localhost:3000/medicine")
 }
 createNewmedicine(medicineObj):Observable<any>{
  return this.hc.post("http://localhost:3000/medicine",medicineObj)
}

//update medicine
updatemedicine(modifiedmedicineOj):Observable<any>{
  return this.hc.put("http://localhost:3000/medicine/"+modifiedmedicineOj.id,modifiedmedicineOj)
}

//delete medicine
deletemedicine(id):Observable<any>{
  console.log("id is ",id)
  return this.hc.delete("http://localhost:3000/medicine/"+id)
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
