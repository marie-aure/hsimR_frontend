export class Franchise {

    id: number;
    nom!: string;
    password: string;
    argent: number;
    role: string;
    tokenCheval: number;
    tokenEtablissement:number;
    authdata?: string;

    constructor( id: number, nom: string, password: string, argent:number, role:string, tokenCheval: number, tokenEtablissement:number, authdata?: string){
        this.id = id;
        this.nom = nom;
        this.password = password;
        this.argent = argent;
        this.role = role;
        this.tokenCheval = tokenCheval;
        this.tokenEtablissement = tokenEtablissement;
        this.authdata = authdata;
    }

}
