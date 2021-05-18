import { Component, OnInit } from '@angular/core';
import { FakeiddetailsService } from '../fakeiddetails.service';
import { Fakeid } from '../models/fakeid.model';

@Component({
  selector: 'app-fakeidlist',
  templateUrl: './fakeidlist.component.html',
  styleUrls: ['./fakeidlist.component.css']
})
export class FakeidlistComponent implements OnInit {

  fakeid:Fakeid[]=[];
  constructor(private fiObj:FakeiddetailsService) { }

  ngOnInit(){
    this.fiObj.getFakeId().subscribe
  (
    userdata=>{
      this.fakeid=userdata;
      console.log(this.fakeid)
    },
    err=>{
      console.log("err is ",err)
    }
  )
 }

}
