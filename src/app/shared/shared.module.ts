import { MensagensComponent } from './../shared/mensagens/mensagens.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MessagesModule,
    MessageModule
  ],
  declarations: [
    MensagensComponent
  ],
  exports: [
    MensagensComponent
  ]
})
export class SharedModule { }
