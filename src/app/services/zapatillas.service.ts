import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";


@Injectable()

export class ZapatillaService{

    public zapatillas : Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Reebok Classic', 'Rebook', 'Blanco',25400,true),
            new Zapatilla('Nike 360', 'Nike', 'Negro',95400,true),
            new Zapatilla('Diadora Gold', 'Diadora', 'Dorado',35400,true),
            new Zapatilla('Adidas Player', 'Adidas', 'Blanco',25400,true),
            new Zapatilla('Vans X.Ray', 'Vans', 'Blanco',25400,false)
        ];
    }
    getTexto(){
        return "Hola mundo desde un servicio";
    }
    
    getZapatillas() : Array<Zapatilla>{

        return this.zapatillas;

    }
    
}