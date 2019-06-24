import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotoComponent } from './foto.component';

@NgModule({
  // responsavel por importar componentes
  declarations: [
    AppComponent,
    FotoComponent
  ],
  // responsavel por importar modulos
  imports: [
    BrowserModule
  ],
  // responsavel por importar services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
