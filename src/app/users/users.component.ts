import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { UserdetailsService } from '../userdetails.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit , OnDestroy {

  mySubscription:Subscription;


  users:User[]=[];;
  constructor(private fsObj:UserdetailsService,private router:Router) { }

  ngOnInit(): void {
   this.mySubscription= this.fsObj.getUsers().subscribe(
      userData=>{
        //assign posts
        this.users=userData;
        console.log(this.users)
       
      },
      err=>{
        console.log("err in getting posts data",err)
      }

    )
  }

  onSelectId(id){
    this.router.navigateByUrl('users/'+id)
  }

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }
}
