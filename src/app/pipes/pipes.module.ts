import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplePipeComponent } from './example-pipe/example-pipe.component';
import { DocoratorPipe } from './docorator.pipe';

const ROUTES: Routes=[
  {path: 'pipes', component:ExamplePipeComponent}
]


@NgModule({
  declarations: [
    ExamplePipeComponent,
    DocoratorPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class PipesModule { }
