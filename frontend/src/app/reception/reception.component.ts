import { Component } from '@angular/core';
import { ReceptionService } from './reception.service';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrl: './reception.component.css'
})
export class ReceptionComponent {
  recepMenu :String ='';

  constructor(private recepService:ReceptionService){

  }

  goto(input:String){
       this.recepMenu=input;
  }

  updateRecep(input:any){
   console.warn(input);
   this.recepService.updateRecep(input).subscribe((result: any) =>{
     alert(result);
   })
  }
}