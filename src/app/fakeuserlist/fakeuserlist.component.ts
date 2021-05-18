import { Component, OnInit } from '@angular/core';
import { FakedataService } from '../fakedata.service';
import { Fakeuser } from '../models/fakeuser.model';

@Component({
  selector: 'app-fakeuserlist',
  templateUrl: './fakeuserlist.component.html',
  styleUrls: ['./fakeuserlist.component.css']
})
export class FakeuserlistComponent implements OnInit {
fakeuser:Fakeuser[]=[];
  constructor(private fsObj:FakedataService){

  }
  ngOnInit(){
   this.fsObj.getFakeUser().subscribe
   (
     userdata=>{
       this.fakeuser=userdata;
       console.log(this.fakeuser)
     },
     err=>{
       console.log("err is ",err)
     }
   )
  }
}
