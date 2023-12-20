import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OwnerComponent } from './owner/owner.component';
import { AdminComponent } from './admin/admin.component';
import { ReceptionComponent } from './reception/reception.component';
import { LoginOwnerComponent } from './login-owner/login-owner.component';
import { LoginRecepComponent } from './login-recep/login-recep.component';

const routes: Routes = [
   
  { path:'', component : HomeComponent},
  { path:'about', component :  AboutComponent},
  { path:'owner', component :  OwnerComponent},
  { path:'admin', component :  AdminComponent},
  { path:'login', component :  LoginComponent},
  { path:'signup', component: SignupComponent},
  { path:'receptionist', component :  ReceptionComponent},  
  { path:'login-owner', component:LoginOwnerComponent},
  { path:'login-recep', component:LoginRecepComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
