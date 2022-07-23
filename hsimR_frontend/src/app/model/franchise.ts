export class Franchise {

    id: number;
    nom: string;
    password: string;
    role: string;
    authdata?: string;

    constructor( id: number, nom: string, password: string, role:string, authdata?: string){
        this.id = id;
        this.nom = nom;
        this.password = password;
        this.role = role;
        this.authdata = authdata;
    }

}
