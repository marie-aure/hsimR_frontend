export class Franchise {

    id: number;
    nom!: string;
    password: string;
    argent: number;
    role: string;
    authdata?: string;

    constructor( id: number, nom: string, password: string, argent:number, role:string, authdata?: string){
        this.id = id;
        this.nom = nom;
        this.password = password;
        this.argent = argent;
        this.role = role;
        this.authdata = authdata;
    }

}
