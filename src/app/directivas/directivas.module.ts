import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivaComponent } from './directiva/directiva.component';

const ROUTES: Routes=[
  {path: 'directivas', component:DirectivaComponent}
]

@NgModule({
  declarations: [
    DirectivaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [DirectivaComponent],
})
export class DirectivasModule { }
