import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {
  usuario: WritableSignal<Usuario> = signal<Usuario>(
    {nombre: 'Pepe', email: 'pepe@gmail.com', estado: 'Iniciado'});

  constructor() { }

  modificarUsuario(usuario: Usuario){
    this.usuario.set(usuario);
  }
}
export interface Usuario{
  nombre: string;
  email: string;
  estado: string;
}
