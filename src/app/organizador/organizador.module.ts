import { AtletaModule } from './../atleta/atleta.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoFormComponent } from './evento-form/evento-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { GrowlModule } from 'primeng/growl';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    GrowlModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    InputTextModule,
    SharedModule,
    AtletaModule,
    ConfirmDialogModule
  ],
  declarations: [
    EventoFormComponent,
    CampoColoridoDirective
  ],
  exports: [
    EventoFormComponent
  ]
})
export class OrganizadorModule { }
