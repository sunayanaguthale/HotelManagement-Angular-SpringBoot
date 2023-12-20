import { Component } from '@angular/core';
import { OwnerFunctionsService } from './owner-functions.service';

@Component({
  selector: 'app-owner-functions',
  templateUrl: './owner-functions.component.html',
  styleUrl: './owner-functions.component.css'
})
export class OwnerFunctionsComponent {
  ownerMenu :String='';

  constructor(private ownerFuncService:OwnerFunctionsService){

  }

  goto(input : String ){
      this.ownerMenu=input;
  }

  updateOwner(input:any){
   console.warn(input);
   this.ownerFuncService.updateOwner(input).subscribe((result: any) =>{
     alert(result);
   })
  }

  deleteOwner(input:any){
   console.warn(input);
   this.ownerFuncService.deleteOwner(input).subscribe((result: any) =>{
     alert(result);
   }); 
  }

  viewOwner(input:any){
     console.warn(input);
     this.ownerFuncService.viewOwner(input).subscribe((result: any) =>{
       console.log(result);
     })
  }
}

