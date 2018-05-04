import { ViewEncapsulation, ElementRef, Input } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-atleta-form',
  templateUrl: './atleta-form.component.html',
  styleUrls: ['./atleta-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AtletaFormComponent implements OnInit {

  items: MenuItem[];
  steps: Step[];
  stepAtiva: Step;
  activeIndex = 0;

  constructor() { }

  ngOnInit() {
      this.steps = [
          {cdStep: 0, icon: 'fa fa-user fa-3x', legenda: 'Informações Pessoais', buttonClass: 'btn-success'},
          {cdStep: 1, icon: 'fa fa-key fa-3x', legenda: 'Informações de Acesso', buttonClass: 'btn-default'},
          {cdStep: 2, icon: 'fa fa-map-marker fa-3x', legenda: 'Localização', buttonClass: 'btn-default'},
          {cdStep: 3, icon: 'fa fa-phone fa-3x', legenda: 'Informações de Contato', buttonClass: 'btn-default'},
          {cdStep: 4, icon: 'fa fa-male fa-3x', legenda: 'Informações do Competidor', buttonClass: 'btn-default'},
        ];
    this.stepAtiva = this.steps[0];
  }

  changeStep(step: Step) {
    this.stepAtiva.buttonClass = 'btn-default';
    this.stepAtiva = step;
    this.stepAtiva.buttonClass = 'btn-success';
    console.log(this.stepAtiva);
  }

  mostrarFormulario(cdStep: number) {
    return {display: this.stepAtiva.cdStep === cdStep ? 'block' : 'none'};
  }

}

export class Step {
    cdStep: number;
    icon: string;
    legenda: string;
    buttonClass: string;
}
