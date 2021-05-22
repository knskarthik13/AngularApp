import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { CamerasComponent } from './cameras/cameras.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsDetailsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContactusComponent,
    MobilesComponent,
    CamerasComponent,
    TelevisionsComponent,
    PagenotfoundComponent,
    UsersComponent,
    UserdetailsComponent,
    SearchPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
