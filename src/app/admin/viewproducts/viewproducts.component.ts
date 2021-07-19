import { Component, OnInit } from '@angular/core';
import { CameradataService } from 'src/app/cameradata.service';
import { CamerasComponent } from 'src/app/cameras/cameras.component';
import { DataService } from 'src/app/data.service';
import { MobilesComponent } from 'src/app/mobiles/mobiles.component';
import { Mobile } from 'src/app/models/mobile.model';
import { Product } from 'src/app/models/product.model';
import { TelevisiondataService } from 'src/app/televisiondata.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  mobiles:Mobile[]=[];
  countmobiles:number;
  countmedicine:number;
  countbabycare:number;
  editMobileIndex;
  editMobileObj=new Mobile('','','','')
  editMobileStatus:boolean=false;

  medicine:Mobile[]=[];
  editMedicineIndex;
  editMedicineObj=new Mobile('','','','')
  editMedicineStatus:boolean=false;

  babycare:Mobile[]=[];
  editBabycareIndex;
  editBabycareObj=new Mobile('','','','')
  editBabycareStatus:boolean=false;



  constructor(private dsObj:DataService ,private msObj:CameradataService,private bsObj:TelevisiondataService) { }

  ngOnInit(): void {
    this.getUsers()
    this.getMedicine()
    this.getBabycare()
  }
  getUsers(){
    this.dsObj.getMobilesData().subscribe(
      res=>{
        this.mobiles=res;
        this.countmobiles=this.mobiles.length
      },
      err=>{
        console.log("err in reading products",err)
      }
    )
  }
  getMedicine(){
    this.msObj.getCamerasData().subscribe(
      res=>{
        this.medicine=res;
        this.countmedicine=this.medicine.length
      },
      err=>{
        console.log("err in reading products",err)
      }
    )
  }
  getBabycare(){
    this.bsObj.getTelevisionsData().subscribe(
      res=>{
        this.babycare=res;
        this.countbabycare=this.babycare.length
      },
      err=>{
        console.log("err in reading products",err)
      }
    )
  }

  //to edit mobile
  editMobile(mobileObj,ind){
    this.editMobileObj=mobileObj;
    this.editMobileIndex=ind;
    this.editMobileStatus=true;

    console.log('obj to be edited ',this.editMobileObj)
  }
  editMedicine(medicineObj,ind){
    this.editMedicineObj=medicineObj;
    this.editMedicineIndex=ind;
    this.editMedicineStatus=true;

    console.log('obj to be edited ',this.editMedicineObj)
  }
  editBabycare(babycareObj,ind){
    this.editBabycareObj=babycareObj;
    this.editBabycareIndex=ind;
    this.editBabycareStatus=true;

    console.log('obj to be edited ',this.editBabycareObj)
  }

  //save mobile after edit
  saveMobile(modifiedMobileObj){
    this.editMobileStatus=false;

    modifiedMobileObj.id=this.editMobileObj["id"];
    modifiedMobileObj.productImage=this.editMobileObj["productImage"];
   
    this.dsObj.updateMobile(modifiedMobileObj).subscribe(
      res=>{
        console.log(res)
        this.getUsers()
      },
      err=>{
        console.log("err in update ",err)
      }
    )
  }
  saveMedicine(modifiedMedicineObj){
    this.editMedicineStatus=false;

    modifiedMedicineObj.id=this.editMedicineObj["id"];
    modifiedMedicineObj.productImage=this.editMedicineObj["productImage"];
   
    this.msObj.updatemedicine(modifiedMedicineObj).subscribe(
      res=>{
        console.log(res)
        this.getMedicine()
      },
      err=>{
        console.log("err in update ",err)
      }
    )
  }
  saveBabycare(modifiedbabycareOj){
    this.editBabycareStatus=false;

    modifiedbabycareOj.id=this.editBabycareObj["id"];
    modifiedbabycareOj.productImage=this.editBabycareObj["productImage"];
   
    this.bsObj.updatebabycare(modifiedbabycareOj).subscribe(
      res=>{
        console.log(res)
        this.getBabycare()
      },
      err=>{
        console.log("err in update ",err)
      }
    )
  }

  //delete mobile
  deleteMobile(mobileObj){
    console.log("mobile to delete",mobileObj.id)
    this.dsObj.deleteMobile(mobileObj.id).subscribe(
      res=>{
        //write getting latest data from API

        console.log("res is ",res);
        this.getUsers()
        alert("Mobile deleted")
      },
      err=>{
        console.log("err in delete mobile",err)
      }
    )
  }
}
  /*deletebabycare(babycareObj){
    console.log("mobile to delete",babycareObj.id)
    this.bsObj.deletebabycare(babycareObj.id).subscribe(
      res=>{
      //write getting latest data from API

      console.log("res is ",res);
      this.getBabycare()
      alert("Mobile deleted")
    },
    err=>{
      console.log("err in delete mobile",err)
    }
  )
}

 deletemedicine(medicineObj){
  console.log("mobile to delete",medicineObj.id)
  this.msObj.deletemedicine(medicineObj.id).subscribe(
    res=>{
      //write getting latest data from API

      console.log("res is ",res);
      this.getmedicine()
      alert("Mobile deleted")
    },
    err=>{
      console.log("err in delete mobile",err)
    }
  )
}*/



