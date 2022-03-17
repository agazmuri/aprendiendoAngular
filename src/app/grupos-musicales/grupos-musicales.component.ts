import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grupos-musicales',
  templateUrl: './grupos-musicales.component.html',
  styleUrls: ['./grupos-musicales.component.css']
})
export class GruposMusicalesComponent implements OnInit, DoCheck, OnDestroy {

  public titulo:string;

  constructor() {
    this.titulo = "Tus grupos favoritos de Rock";  
   }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
      console.log("DoCheck ejecutado");
  }

  ngOnDestroy(): void {
      console.log("Ondestroy ejecutado");
  }

  cambiarTitulo(){
    this.titulo = "Tus grupos favoritos de Música";
  }

}
