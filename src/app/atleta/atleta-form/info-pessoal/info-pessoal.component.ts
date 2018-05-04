import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-pessoal',
  templateUrl: './info-pessoal.component.html',
  styleUrls: ['./info-pessoal.component.css']
})

export class InfoPessoalComponent implements OnInit {

  paises: Pais[];
  paisSelecionado: Pais;

  valorRadioButton: number;
  constructor() {
    this.paises = [
      {name: 'Brasil', code: 'BRA'},
      {name: 'Austrália', code: 'AUS'},
      {name: 'Equador', code: 'EQU'},
      {name: 'Suécia', code: 'SUE'},
      {name: 'Paraguai', code: 'PAR'},
      {name: 'Chile', code: 'CHI'}
    ];
   }

  ngOnInit() {
  }

}

interface Pais {
  name: string;
  code: string;
}
