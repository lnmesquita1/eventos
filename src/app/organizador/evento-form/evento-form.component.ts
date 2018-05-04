import { EventoService } from './../../evento.service';
import { Evento } from './../../atleta/Evento';
import { Categoria } from './../../atleta/Categoria';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { Message, ConfirmationService } from 'primeng/components/common/api';

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.css'],
  providers: [ ConfirmationService ]
})

export class EventoFormComponent implements OnInit {

  eventos: Evento[];
  msgs: Message[] = [];
  evento: Evento;
  categorias = [
    { label: 'Selecione', value: { nmCategoria: '', cdCategoria: 0 } },
    { label: 'Jiu-Jitsu', value: { nmCategoria: 'Jiu-Jitsu', cdCategoria: 1 } },
    { label: 'Submission', value: { nmCategoria: 'Submission', cdCategoria: 2 } }
  ];

  constructor(private eventoService: EventoService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.evento = new Evento();
    this.evento.categoria = { nmCategoria: '', cdCategoria: 0 };
    this.consultar();
  }

  cadastrarEvento(form: NgForm) {
    if (this.evento.id == null) {
      this.eventoService.adicionar(this.evento)
      .then(evento => {
        alert(`Evento adicionado com sucesso!. ${evento.nmEvento}`);
        this.eventos.push(evento);
        this.evento = new Evento();
        form.reset({ cat: ''});
      });
    } else {
      this.alterarEvento(form);
    }
  }

  alterarEvento(form: NgForm) {
    this.eventoService.atualizar(this.evento)
    .then(() => {
      alert('Evento alterado com sucesso!');
      this.evento = new Evento();
      form.reset({ cat: ''});
    });
  }

  aoAlterarEvento(event: Evento) {
    this.evento = event;
  }

  aoExcluirEvento(event: number) {
    this.confirmationService.confirm({
      message: 'Tem certeza que você deseja excluir este evento?',
      header: 'Confirmar exclusão',
      icon: 'fa fa-trash',
      accept: () => {
        this.eventoService.excluir(event)
        .then(() => {
          this.msgs = [{severity: 'info', summary: 'Confirmado', detail: 'Evento excluído com sucesso!'}];
          this.consultar();
        });
      },
      reject: () => {
          this.msgs = [{severity: 'info', summary: 'Rejeitado', detail: 'Você não confirmou a exclusão do evento.'}];
      }
  });
  }

  consultar() {
    this.eventoService.consultar()
    .then(eventos => {
      this.eventos = eventos;
    });
  }

  aoSelecionar(categoria: any) {
    const nmCategoria: string = categoria.value.nmCategoria;
    console.log(categoria.value.nmCategoria);
    if (nmCategoria !== '') {
      this.showSuccess(categoria.value.nmCategoria);
    }
  }

  showSuccess(nmCategoria: string) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Categoria', detail: nmCategoria});
  }

}
