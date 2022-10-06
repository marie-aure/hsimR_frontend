import { Franchise } from './franchise';
import { Tour } from './tour';

export class Transaction {

    montant: number;
    libelle: string;
    sourceF: Franchise | null;
    destinataireF: Franchise | {id:number} | null;
    tour: Tour | null;

    constructor(montant: number,
        libelle: string,
        sourceF: Franchise | null,
        destinataireF: Franchise | {id:number} | null,
        tour: Tour | null) {
        this.montant = montant;
        this.libelle = libelle;
        this.sourceF = sourceF;
        this.destinataireF = destinataireF;
        this.tour = tour;
    }

}
