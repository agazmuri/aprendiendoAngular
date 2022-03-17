import { Component } from "@angular/core";

@Component({

    selector : 'peliculas',
    templateUrl : './peliculas.component.html'
})

export class PeliculasComponent{

    public titulo : string;

    constructor(){

        this.titulo = "Componente de Películas";
    }

}