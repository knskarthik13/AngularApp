import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { UserdetailsService } from '../userdetails.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  userObj:User;
  constructor(private ar:ActivatedRoute,private fs:UserdetailsService) { }

  ngOnInit(): void {
    //get id from url
    let id=this.ar.snapshot.params.id;
    
    //get data of post with this current id
    this.fs.getUserById(id).subscribe(
      obj=>{
        console.log("obj is ",obj)
        this.userObj=obj;
      },
      err=>{
        console.log("err in reading post",err)
      }
    )

  }
}
