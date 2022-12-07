import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleDataBindingComponent } from './example-data-binding/example-data-binding.component';
import { ChildDataBindingComponent } from './child-data-binding/child-data-binding.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ExampleDataBindingComponent,
    ChildDataBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DataBindingModule { }
