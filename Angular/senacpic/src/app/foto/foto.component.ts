import { Component, Input } from '@angular/core';
import { Foto } from './foto.model';

@Component({
    selector: 'app-foto',
    templateUrl: './foto.component.html'
})
export class FotoComponent {
    @Input() titulo:string;
    @Input() url:string;
    @Input() alternativo:string;
    @Input() descricao:string;
}