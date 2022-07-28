import { Tour } from './tour';

export class InfoPassage {

    changementAnnee:boolean;
    changementMois:boolean;
    tourSuivant:Tour;

    constructor(changementAnnee:boolean, changementMois:boolean, tourSuivant:Tour){
        this.changementAnnee = changementAnnee;
        this.changementMois = changementMois;
        this.tourSuivant = tourSuivant;
    }

}
