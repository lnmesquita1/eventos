import { Http } from '@angular/http';
import { Evento } from './atleta/Evento';
import { NgForm } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventoService } from './evento.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.eventoService.consultar();
  }

}
