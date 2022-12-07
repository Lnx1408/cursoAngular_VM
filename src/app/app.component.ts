import { ExampleDataBindingComponent } from './data-binding/example-data-binding/example-data-binding.component';
import { Component, OnInit } from '@angular/core';
import { ExampleService } from './example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string ='';
  constructor(private exampleService: ExampleService){


  }
  ngOnInit(): void {
    this.title = this.exampleService.getMessage();
  }
}
