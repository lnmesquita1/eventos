import { Categoria } from './atleta/Categoria';
import { Http } from '@angular/http';
import { Evento } from './atleta/Evento';
import { Injectable, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EventoService {

    constructor(private http: Http) {
        this.consultar();
    }

    consultar(): Promise<any> {
        return this.http.get('http://localhost:3000/eventos')
        .toPromise()
        .then(res => res.json());
    }

    adicionar(evento: Evento): Promise<any> {
        return this.http.post('http://localhost:3000/eventos', evento)
            .toPromise()
            .then(response => response.json());
    }

    excluir(id: number): Promise<void> {
        return this.http.delete(`http://localhost:3000/eventos/${id}`)
        .toPromise()
        .then(() => null);
    }

    atualizar(evento: any): Promise<any> {
        return this.http.put(`http://localhost:3000/eventos/${evento.id}`, evento)
        .toPromise()
        .then(response => response.json())
        .catch(erro => {
            return Promise.reject(`Erro ao alterar evento ${evento.id}`);
        });
    }
}
