import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplePipeComponent } from './example-pipe/example-pipe.component';
import { DocoratorPipe } from './docorator.pipe';



@NgModule({
  declarations: [
    ExamplePipeComponent,
    DocoratorPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
