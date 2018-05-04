import { Categoria } from './Categoria';

export class Evento {
    id: number;
    nmEvento: string;
    dsEvento: string;
    nmLocal: string;
    dtInicio: Date;
    dtFim: Date;
    categoria: Categoria;
}


