import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrl: './owner.component.css'
})
export class OwnerComponent {
 
  ownerMenu :String='';

  constructor(){

  }

  goto(input : String ){
      this.ownerMenu=input;
  }
}
