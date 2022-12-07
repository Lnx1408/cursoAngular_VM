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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecondModule,
    DirectivasModule,
    PipesModule
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
    if (this.browser_module.getElementsByTagName('app-example-pipe').length > 0) {
      appRef.bootstrap(ExamplePipeComponent);
    }
  }
}