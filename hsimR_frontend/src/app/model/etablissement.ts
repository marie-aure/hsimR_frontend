export class Etablissement {

    id: number| null;
    nom: string;
    type: {type:string, libelle:string};


    constructor( id: number | null, nom: string, type: {type:string, libelle:string}){
        this.id = id;
        this.nom = nom;
        this.type = type;
    }

}
