import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { OwnerComponent } from './owner/owner.component';
import { AdminComponent } from './admin/admin.component';
import { BookingComponent } from './booking/booking.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RecepFunctionComponent } from './recep-function/recep-function.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReceptionComponent } from './reception/reception.component';
import { AdminFunctionsComponent } from './admin-functions/admin-functions.component';
import { OwnerFunctionsComponent } from './owner-functions/owner-functions.component';
import { RoomComponent } from './room/room.component';
import { LoginOwnerComponent } from './login-owner/login-owner.component';
import { LoginRecepComponent } from './login-recep/login-recep.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    OwnerComponent,
    AdminComponent,
    ReceptionComponent,
    BookingComponent,
    SignupComponent,
    LoginComponent,
    RecepFunctionComponent,
    AdminFunctionsComponent,
    OwnerFunctionsComponent,
    RoomComponent,
    LoginOwnerComponent,
    LoginRecepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration()
  ],
  bootstrap: [AppComponent, HomeComponent ]
})
export class AppModule { }
