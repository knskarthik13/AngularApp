import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fakeid } from './models/fakeid.model';

@Injectable({
  providedIn: 'root'
})
export class FakeiddetailsService {

  constructor(private hc:HttpClient) { }


  getFakeId():Observable<Fakeid[]>{
    return this.hc.get<Fakeid[]>("https://reqres.in/api/unknown")
  }
}
