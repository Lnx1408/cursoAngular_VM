import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-data-binding',
  templateUrl: './example-data-binding.component.html',
  styleUrls: ['./example-data-binding.component.css']
})
export class ExampleDataBindingComponent implements OnInit {

  messageFromChild:string="";
  
  message:string="";

  constructor(){}
  ngOnInit(){
  }
  responseFromChild(event: any) {
    this.messageFromChild = event;
  }
}
