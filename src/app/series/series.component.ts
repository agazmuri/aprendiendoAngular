import { Component } from "@angular/core";

@Component({

    selector : 'series',
    templateUrl : './series.component.html'

})


export class SeriesComponent {

    public titulo : string;
    public listado : string;


    constructor(){
        this.titulo = "Series";
        this.listado = "Mejores Animes de la Historia";
    }

}