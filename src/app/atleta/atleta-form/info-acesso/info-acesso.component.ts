import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-acesso',
  templateUrl: './info-acesso.component.html',
  styleUrls: ['./info-acesso.component.css']
})
export class InfoAcessoComponent {

  imprimePropriedades(control: FormControl) {
    console.log(control);
  }

}
