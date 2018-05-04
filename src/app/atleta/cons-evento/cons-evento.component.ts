import { EventoService } from './../../evento.service';
import { Evento } from './../Evento';
import { Http } from '@angular/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-cons-evento',
  templateUrl: './cons-evento.component.html',
  styleUrls: ['./cons-evento.component.css']
})
export class ConsEventoComponent {

  @Input() eventos: Evento[];
  @Output() eventoExcluido = new EventEmitter();
  @Output() eventoAlterado = new EventEmitter();

  eventosLinha: SelectItem[];
  eventosLinhaSelecionado: number;
  alturaCard = '350px';

  constructor(private eventoService: EventoService) {
    // this.consultar();
    this.eventosLinha = [
      {label: '4', value: 4},
      {label: '2', value: 2},
      {label: '6', value: 6}
    ];

    this.eventosLinhaSelecionado = 4;
  }

  consultar() {
    this.eventoService.consultar()
    .then(eventos => {
      this.eventos = eventos;
    });
  }

  aoExcluir(event: number) {
    this.eventoExcluido.emit(event);
  }

  aoAlterar(event: Evento) {
    this.eventoAlterado.emit(event);
  }

  eventosPorLinha() {
    if (this.eventosLinhaSelecionado === 4) {
      this.alturaCard = '350px';
      return {
        width: '25%',
        float: 'left',
        padding: '0px'
      };
    } else if (this.eventosLinhaSelecionado === 2) {
      this.alturaCard = '500px';
      return {
        width: '50%',
        float: 'left',
        padding: '0px'
      };
    } else if (this.eventosLinhaSelecionado === 6) {
      this.alturaCard = '400px';
      return {
        width: '16.667%',
        float: 'left',
        padding: '0px'
      };
    }
  }

}
