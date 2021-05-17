import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor(private hc:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.hc.get<User[]>('http://localhost:3000/users')
  }


 getUserById(id):Observable<User>{
    return this.hc.get<User>('http://localhost:3000/users/'+id)
 }
 }

  

