import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { CamerasComponent } from './cameras/cameras.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { TelevisionsComponent } from './televisions/televisions.component';

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
      path:'healthcare',
      component:MobilesComponent
    },
    {
      path:'medicine',
      component:CamerasComponent
    },
    {
      path:'babycare',
      component:TelevisionsComponent
    },
    {
      path:'',
      redirectTo:'/product/healthcare',
      pathMatch:'full'
    }]
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  { path: 'admin',canActivate:[AdminGuard], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
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

