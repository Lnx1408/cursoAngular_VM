import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-data-binding',
  templateUrl: './child-data-binding.component.html',
  styleUrls: ['./child-data-binding.component.css']
})

export class ChildDataBindingComponent implements OnInit {
  //Se crea el atributo en child-data-binding.component.ts que va a recibir el mensaje del padre
  @Input() messageFromFather: string="";
  //Se crea el atributo en child-data-binding.component.ts que va a enviar el mensaje al padre
  @Output() responseFromChild = new EventEmitter();

  constructor(){
  }
  ngOnInit(): void {    
  }

  responder(){
    console.log("Clic en responder");
    this.responseFromChild.emit("Noooooooo");
  }
}
