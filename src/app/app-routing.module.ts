import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamerasComponent } from './cameras/cameras.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FakeidlistComponent } from './fakeidlist/fakeidlist.component';
import { FakeuserlistComponent } from './fakeuserlist/fakeuserlist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { TestComponent } from './test/test.component';
import { PlayerComponent } from "./pages/player/player.component";

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'product',
    component:ProductComponent,
    children:[
    {
      path:'mobiles',
      component:MobilesComponent
    },
    {
      path:'cameras',
      component:CamerasComponent
    },
    {
      path:'televisions',
      component:TelevisionsComponent
    },
    {
      path:'fakeuser',
      component:FakeuserlistComponent
    },
    {
      path:'fakeid',
      component:FakeidlistComponent
    },
    {
      path:'',
      redirectTo:'/product/mobiles',
      pathMatch:'full'
    }]
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  { path: "Player", component: PlayerComponent },
  {
    path:'**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

