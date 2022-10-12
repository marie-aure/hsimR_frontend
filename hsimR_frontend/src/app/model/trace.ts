import { Franchise } from './franchise';

export class Trace {

    type:string;
	description:string;
    date:string;
    franchise:Franchise;
    
    constructor( type:string, description:string, date:string, franchise:Franchise){
        this.type = type;
        this.description = description;
        this.date = date;
        this.franchise = franchise;
    }
}
