import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { OrganizadorModule } from './organizador/organizador.module';
import { AtletaModule } from './atleta/atleta.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventoService } from './evento.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AtletaModule,
    OrganizadorModule,
    CoreModule,
    HttpModule
  ],
  providers: [EventoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
