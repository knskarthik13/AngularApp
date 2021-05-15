import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable} from 'rxjs'
import {Post} from './models/post.model'
@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  constructor(private hc:HttpClient) { }


getPost():Observable<Post[]>{
  return this.hc.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
}

}


