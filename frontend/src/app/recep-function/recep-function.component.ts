import { Component } from '@angular/core';
import { RecepFunctionsService } from './recep-functions.service';

@Component({
  selector: 'app-recep-function',
  templateUrl: './recep-function.component.html',
  styleUrl: './recep-function.component.css'
})
export class RecepFunctionComponent {
  recepMenu :String='';
  recepDetail:any;
  allRecep:any;
  

  constructor(private recepFuncService : RecepFunctionsService){

  }

    gotoRecep(input:String){
      this.recepMenu=input;
  }

  createRecep(input:any){
    console.warn(input);
    this.recepFuncService.createRecep(input).subscribe((result: any) =>{
      alert(result);
    })
  }

  deleteRecep(input:any){
    console.warn(input);
    this.recepFuncService.deleteRecep(input).subscribe((result: any) =>{
      alert(result);
    });
  }

  viewRecep(input:any){
    console.warn(input);
    this.recepFuncService.viewRecep(input).subscribe((result: any) =>{
      console.log(result);
      return this.recepDetail=result;
    })
  }

  viewAllRecep(){
    this.recepFuncService.viewAllRecep().subscribe((result: any) =>{
      console.log(result);
      return this.allRecep=result;
    })
  }



}

