import { ExampleService } from './../example.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css'],
  providers:[ExampleService]
})
export class DiComponent implements OnInit{
  @Input() message:string="";
  show:string="";
  
  constructor(private exampleService: ExampleService){}

  ngOnInit(): void {
    this.exampleService.setMessage(this.message);
    //Si ejecutamos esta linea son el setTimeout nos damos cuenta que se ejecuta sin problemas, porque no se alcanza a ver la actualización de datos, pero ahora nos damos cuenta que solo toma el último valor como dato a mostrar, para evitar eso se implementa providers:[ExampleService] dentro de component
    setTimeout(() => {
      this.show=this.exampleService.getMessage();      
    }, 3000);
  }
}
