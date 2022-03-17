import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';
// Importamos la variable "Configuracion"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'Aprendiendo-Angular';
  public mostrar_videojuego: boolean = true;
  public descripcion : string;
  public config;

  constructor(){
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
    this.config = Configuracion;
  }

  ocultarVideojuegos(valor:boolean){
      this.mostrar_videojuego = valor;
  }

  

}
