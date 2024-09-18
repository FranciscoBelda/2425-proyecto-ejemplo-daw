export interface Usuario{
  nombre: string;
  edad: number;
  profesion?: string;
}

export class ControlUsuario{
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  cumplirAnyos(){
    this.edad++;
  }
}

export interface Poliedro{
  tipo: string;
  color: string;
}
