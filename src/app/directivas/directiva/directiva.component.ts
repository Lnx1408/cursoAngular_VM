import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {
  
  show: boolean;
  colors: string[];
  
  constructor(){
    //Sino inicializo la variable en el constructor, entonces me sale un error.
    this.show =true;
    this.colors = [];
  }
  
  ngOnInit(){
    this.show = true;
    this.colors = ['red','green','blue', 'yellow']
  }
}