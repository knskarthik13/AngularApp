import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable} from 'rxjs'
import {Post} from './models/post.model'
import { Fakeuser } from './models/fakeuser.model';
@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  constructor(private hc:HttpClient) { }


getFakeUser():Observable<Fakeuser[]>{
  return this.hc.get<Fakeuser[]>("https://jsonplaceholder.typicode.com/users")
}

}


