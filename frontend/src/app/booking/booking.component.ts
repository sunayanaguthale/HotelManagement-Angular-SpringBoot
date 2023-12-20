import { Component } from '@angular/core';
import { BookingService } from './booking.service';

// interface booking{
//   bookingId :number;
//   custName:String;
//   custContact:String;
//   noOfDays:number;
//   cod:String;
//   cid:String;
//   roomNo:Number;
//   advance:number;
//   totalAmount:number;
//   payment:number;
//   balance:number;
// }

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  bookingDetails :any;
  bookingMenu:any='';
  allbooking:any;

  
 

  constructor(private bookingService: BookingService){  }

  ngOnInit():void{
    
  }

  
  goto(input:String){
    this.bookingMenu=input;
}

  checkIn(input:any){
    console.warn(input);
    this.bookingService.checkIn(input).subscribe((result: any)=>{
      alert(result);
    })
  }

  bookingExtension(input:any){
    console.warn(input);
    this.bookingService.bookingExtension(input).subscribe((result: any) =>{
      alert(result);
    })
  }


  bookingReduction(input:any){
    console.warn(input);
    this.bookingService.bookingReduction(input).subscribe((result: any) =>{
      alert(result);
    })
  }

  checkOut(input:any){
    console.warn(input);
    this.bookingService.checkOut(input).subscribe((result: any) =>{
      alert(result);
    })
  }

  payment(input:any){
    console.warn(input);
    this.bookingService.payment(input).subscribe((result: any) =>{
      alert(result);
    })
  }

  viewBooking(input:any){
    console.warn(input);
    this.bookingService.viewBooking(input).subscribe((result: any) =>{
      console.log(result);
      return this.bookingDetails=result;
    })
  }

  viewAllbooking(){
    this.bookingService.viewAllbooking().subscribe((result: any)=>{
      console.log(result);
      return this.allbooking=result;
    })
  }

  


}