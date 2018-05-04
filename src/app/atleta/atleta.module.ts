import { CardEventoComponent } from './../atleta/card-evento/card-evento.component';
import { InfoPessoalComponent } from './../atleta/atleta-form/info-pessoal/info-pessoal.component';
import { InfoCompetidorComponent } from './atleta/../atleta-form/info-competidor/info-competidor.component';
import { InfoAcessoComponent } from './../atleta/atleta-form/info-acesso/info-acesso.component';
import { AtletaFormComponent } from './../atleta/atleta-form/atleta-form.component';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoContatoComponent } from './atleta-form/info-contato/info-contato.component';
import { InfoLocalizacaoComponent } from './atleta-form/info-localizacao/info-localizacao.component';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { GrowlModule } from 'primeng/growl';
import { StepsModule } from 'primeng/steps';
import { InputMaskModule } from 'primeng/inputmask';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PasswordModule } from 'primeng/password';
import 'rxjs/add/operator/map';
import { SharedModule } from '../shared/shared.module';
import { ConsEventoComponent } from './cons-evento/cons-evento.component';

@NgModule({
  imports: [
    CardModule,
    CommonModule,
    InputTextModule,
    ButtonModule,
    SelectButtonModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    GrowlModule,
    StepsModule,
    InputMaskModule,
    RadioButtonModule,
    PasswordModule,
    HttpModule,
    SharedModule,
  ],
  declarations: [
    AtletaFormComponent,
    InfoAcessoComponent,
    InfoCompetidorComponent,
    InfoContatoComponent,
    InfoLocalizacaoComponent,
    InfoPessoalComponent,
    ConsEventoComponent,
    CardEventoComponent
  ],
  exports: [
    AtletaFormComponent,
    ConsEventoComponent
  ]
})
export class AtletaModule { }
