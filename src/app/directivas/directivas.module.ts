import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivaComponent } from './directiva/directiva.component';



@NgModule({
  declarations: [
    DirectivaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DirectivaComponent],
})
export class DirectivasModule { }
