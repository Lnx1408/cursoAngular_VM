import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-pipe',
  templateUrl: './example-pipe.component.html',
  styleUrls: ['./example-pipe.component.css']
})
export class ExamplePipeComponent implements OnInit {
  fecha: Date;
  numero: number;
  //Variables usadas para el ejemplo de 
  mensajes: string[];
  mensajesMapping: {[k:string]:string};
  //Variables usada para 
  usuario: any;
  map: {[k:string]:string};
  constructor(){
    this.fecha = new Date();
    this.numero=0;
    this.mensajes=[];
    this.mensajesMapping={};
    this.map={};
  }

  ngOnInit(){
    this.fecha = new Date();
    this.numero = 2.453;
    
    this.mensajes=['Saludos gente','Buenas tardes con todos','XDXD'];
    this.mensajesMapping={'=0':'No hay mensajes','=1':'Tienes un mensaje', 'other': 'Tienes # mensajes'}; 

    this.usuario = {nombre:'Arlette',apellido:'Peralta',sexo:'Mujer'}
    //this.usuario = {nombre:'Yermin',apellido:'Lino',sexo:'Hombre'}
    this.map ={'Hombre': 'Sr.', 'Mujer':'Srta.'}
  
  }

}
