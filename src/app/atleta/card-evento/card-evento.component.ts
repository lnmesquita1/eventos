import { Evento } from './../Evento';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-evento',
  templateUrl: './card-evento.component.html',
  styleUrls: ['./card-evento.component.css']
})
export class CardEventoComponent {

  @Input() evento: Evento;
  @Input() alturaCard;

  @Output() eventoExcluido = new EventEmitter();
  @Output() eventoAlterado = new EventEmitter();

  getEstilo() {
    return {
      width: '100%',
      float: 'left',
      border: '0px',
      height: 'auto'
    };
  }

  excluir(id: number) {
    this.eventoExcluido.emit(id);
  }

  alterar(evento: Evento) {
    // A data é enviada como String para o back-end,
    // por isso é necessário transformar em Date novamente.
    evento.dtInicio = new Date(evento.dtInicio);
    evento.dtFim = new Date(evento.dtFim);

    this.eventoAlterado.emit(evento);
  }
}
