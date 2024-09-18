import { Component } from '@angular/core';
import {Usuario} from "../../common/interfaces";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  numero: number = 8.234;
  nombre: string = 'Nombre';
  booleana: boolean = true;

  objetoUsuario: Usuario = {
    nombre: 'Pepe',
    edad: 24,
    profesion: 'Carpintero'
  };
  objetoUsuario2: Usuario = {
    nombre: 'Pepa',
    edad: 27
  };

  usuarios: Usuario[] = [];
  nombres:  string[] = ['Pepe', 'Sara','Laura'];
  numeros: number[] =[4,5,7,8,9,10];

  addUser(usuario: Usuario) {
    const miUsuario: Usuario = {
      nombre: usuario.nombre,
      edad: usuario.edad,
      profesion: usuario.profesion,
    }
    var num = 4;
    num++;
    this.usuarios.push(miUsuario);
  }

  addUsuario = (usuario: Usuario) => {
    const miUsuario: Usuario = {
      nombre: usuario.nombre,
      edad: usuario.edad,
      profesion: usuario.profesion
    }
    this.usuarios.push(miUsuario);
  }

}
