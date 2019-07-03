import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import{ FotoModule } from './foto/foto.module';
import { HomeModule } from './home/home.module';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  // responsavel por importar componentes
  declarations: [
    AppComponent,
    NotFoundPageComponent
  ],
  // responsavel por importar modulos
  imports: [
    BrowserModule,
    FotoModule,
    AppRoutingModule,
    HomeModule
  ],
  // responsavel por importar services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
