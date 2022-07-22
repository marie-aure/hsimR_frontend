export class Franchise {

    id: number;
    nom: string;
    password: string;
    authdata?: string;

    constructor( id: number, nom: string, password: string, authdata?: string){
        this.id = id;
        this.nom = nom;
        this.password = password;
        this.authdata = authdata;
    }

}
