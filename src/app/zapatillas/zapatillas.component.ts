import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from '../services/zapatillas.service';

@Component({

    selector:'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers : [ZapatillaService]

})

export class ZapatillasComponent implements OnInit{

    public titulo : string = "Componente de Zapatillas";
    
    public marcas : String[];
    public color : string;
    public mi_marca : string;    
    public zapatillas : Array<Zapatilla>;

    constructor(
        private _zapatillaService : ZapatillaService
    ){

        this.color = 'blue'
        this.marcas = new Array();
        this.mi_marca = "";
        this.zapatillas = new Array();
       
        
        
    }

    ngOnInit() {
       
        this.zapatillas = this._zapatillaService.getZapatillas();
        this.getMarcas();
        //alert(this._zapatillaService.getTexto());

    }

   getMarcas(){
        this.zapatillas.forEach((zapatilla,index) => {
            
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
            }
        });

        console.log(this.marcas);
    }

    addMarcas(){
        this.marcas.push(this.mi_marca);

    }

    borrarMarca(indice:number){
        //delete this.marcas[indice];
        this.marcas.splice(indice,1); //Borrará solo un elemento
    }

}