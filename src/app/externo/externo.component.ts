import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers : [PeticionesService]  
})
export class ExternoComponent implements OnInit {

  public respuesta: any;
  public first_name : any;

  constructor(
    private _peticionesServices : PeticionesService
    ) { }

  ngOnInit(): void {
    this._peticionesServices.getUser().subscribe(
      result => {
        console.log(result);
        this.respuesta = result.data;
        this.first_name = this.respuesta.first_name;

      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
