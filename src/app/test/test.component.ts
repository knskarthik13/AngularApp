import { Component, OnInit } from '@angular/core';
import { FakedataService } from '../fakedata.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  post:Post[]=[];
  //inject object dataservice class

  constructor(private dsObj:FakedataService){

  }
  ngOnInit(){
   this.dsObj.getPost().subscribe
   (
     data=>{
       this.post=data;
       console.log(this.post)
     },
     err=>{
       console.log("err is ",err)
     }
   )
  }
}
