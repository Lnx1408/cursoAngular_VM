import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  message:string ="";

  constructor() {
    this.message="En el constructor";
    console.log('new ExampleService()');
   } 
   getMessage(){
    return this.message;
   }
   setMessage(message:string):void{
    this.message = message;
   }
}
