import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  standalone: true,
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.scss'
})
export class BotaoComponent {

  @Input() text : string='clique aqui!';

  @Output() clicou = new EventEmitter();

  clicouNoComponente(){
    this.clicou.emit('Veio pelo evento');
  }
}
