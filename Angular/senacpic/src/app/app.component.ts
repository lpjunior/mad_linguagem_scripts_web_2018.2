import { Component } from '@angular/core';
import { Foto } from './foto/foto.model';
import { FotoService } from './foto/foto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fotos:Foto[];

  constructor(private fotoService: FotoService){
    fotoService.listaFotos().subscribe(
      fotosDB => this.fotos = fotosDB,
      erroDB => console.log(erroDB)
    );
  }
}