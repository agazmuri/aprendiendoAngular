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
  public avatar : any;
  public userID: number;

  constructor( private _peticionesServices : PeticionesService ) 
    { 
      this.userID = 1;
    }

  ngOnInit(): void {
    this.cargaUsuario();
  }

  cargaUsuario(){
    this.respuesta = false;
    this._peticionesServices.getUser(this.userID).subscribe(
      result =>{
        this.respuesta = result.data;
        this.first_name = this.respuesta.first_name;
        this.avatar = this.respuesta.avatar;
      },
      error =>{
        console.log(<any>error);
      }
    );

  }



}
