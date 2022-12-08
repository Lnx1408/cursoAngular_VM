import { Routes, RouterModule } from '@angular/router';
import { ExampleDataBindingComponent } from './data-binding/example-data-binding/example-data-binding.component';
import { ExamplePipeComponent } from './pipes/example-pipe/example-pipe.component';
import { PipesModule } from './pipes/pipes.module';
import { DirectivaComponent } from './directivas/directiva/directiva.component';
import { DirectivasModule } from './directivas/directivas.module';
import { SecondModule } from './second/second.module';
import { DOCUMENT } from '@angular/common';
import { ApplicationRef, Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingModule } from './data-binding/data-binding.module';
import { DiComponent } from './di/di.component';

//Se agrega para poder trabajar con rutas
const ROUTES: Routes = [
  {path:'', redirectTo: 'directivas', pathMatch: 'full'}
  
  
]
@NgModule({
  declarations: [
    AppComponent,
    DiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecondModule,
    //¿Cómo se hace lzy load?
    DirectivasModule,
    PipesModule,
    DataBindingModule,
    RouterModule.forRoot(ROUTES)
  ],
  //No es necesario añadir esta característica en @ngModule, porque está Obsoleta
  entryComponents:[AppComponent],
  providers: []
})

export class AppModule {
  //Creado para ejecutar de forma manual el proyecto.
  browser_module;
  constructor(@Inject(DOCUMENT) private document: any) {
    this.browser_module = document;
  }
  //Si se elimina el tag <app-root> del fichero Index.htm, entonces no saldrá
  ngDoBootstrap(appRef: ApplicationRef) {
    if (this.browser_module.getElementsByTagName('app-root').length > 0) {
      appRef.bootstrap(AppComponent);
    }
  }
} 