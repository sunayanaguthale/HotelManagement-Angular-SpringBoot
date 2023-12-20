import { Component } from '@angular/core';
import { LoginOwnerService } from './login-owner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-owner',
  templateUrl: './login-owner.component.html',
  styleUrl: './login-owner.component.css'
})
export class LoginOwnerComponent {

  data:any;
  constructor(private loginOwnerService:LoginOwnerService, private router:Router){}

  login(input:any){
    console.warn(input);
   this.loginOwnerService.loginOwner(input).subscribe((result: any)=>{
    this.data=result;
   })

    if(this.data=='true'){
      alert("Successfully Logged in")
     this.router.navigateByUrl('/owner');
    }else{
      alert("Invalid Credentials");
    }
  }

}
