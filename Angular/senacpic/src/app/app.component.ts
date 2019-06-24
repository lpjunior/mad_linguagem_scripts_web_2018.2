import { Component } from '@angular/core';
import { Foto } from './foto/foto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fotos:Foto[] = [
    {
        id: 1,
        titulo: 'Windranger',
        alt: 'Windrager Lyralei',
        url: 'https://gamepedia.cursecdn.com/dota2_gamepedia/6/60/Windranger_icon.png?version=21ac0a7a66f625fc8bb20bf511e2fcee',
        descricao: 'As florestas ao oeste guardam bem os seus segredos. Um deles é Lyralei, arqueira mestra dos bosques e afilhada favorita do vento. Conhecida nos dias de hoje como Windranger, a família de Lyralei foi morta em uma tempestade na noite do seu nascimento – a sua casa destruída pelo temporal e tudo que havia dentro espalhado ao vento.'
    },
    {
        id: 2,
        titulo: 'Viper',
        alt: 'Viper the Netherdrake',
        url: 'https://gamepedia.cursecdn.com/dota2_gamepedia/5/5f/Viper_icon.png?version=02fc822884d25d0d9dc8a7168cd5220a',
        descricao: '	O companheiro malévolo de um feiticeiro sádico que o capturou e tinha esperanças de o domar, Viper estava curiosamente feliz por ter sido libertado dos selados e inalteráveis Confins das Profundezas, onde a sua raça viveu durante milhões de anos, depois de tremores tectônicos terem selado os Netherdrakes em cavernas luminosas.'
    },
    {
        id: 3,
        titulo: 'Invoker',
        alt: 'Invoker',
        url: 'https://gamepedia.cursecdn.com/dota2_gamepedia/0/00/Invoker_icon.png?version=a05311a16f9617780b6d293e49373b8a',
        descricao: '	Na sua mais primitiva e, diriam alguns, mais potente forma, a magia era basicamente a arte da memória. Não demandava tecnologia, nem cajados ou qualquer artifício além da mente do mago. A simbologia dos rituais é apenas um recurso mnemônico, para que o praticante lembre com detalhes a exata fórmula mental de um feitiço.'
    }
  ]
}
