import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import{ FotoModule } from './foto/foto.module';
import { FotoRegistroComponent } from './foto-registro/foto-registro.component';

@NgModule({
  // responsavel por importar componentes
  declarations: [
    AppComponent,
    FotoRegistroComponent
  ],
  // responsavel por importar modulos
  imports: [
    BrowserModule,
    FotoModule
  ],
  // responsavel por importar services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
