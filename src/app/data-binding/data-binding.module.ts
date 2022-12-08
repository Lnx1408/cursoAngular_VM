import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleDataBindingComponent } from './example-data-binding/example-data-binding.component';
import { ChildDataBindingComponent } from './child-data-binding/child-data-binding.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes=[
  {path: 'databinding', component:ExampleDataBindingComponent},
  //Para pasar un parámetro por URL
  {path: 'databinding/:param', component:ExampleDataBindingComponent}
]

@NgModule({
  declarations: [
    ExampleDataBindingComponent,
    ChildDataBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class DataBindingModule { }
