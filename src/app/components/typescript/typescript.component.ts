import { Component } from '@angular/core';
import {Poliedro} from "../../common/interfaces";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-typescript',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './typescript.component.html',
  styleUrl: './typescript.component.css'
})
export class TypescriptComponent {

  poliedro: Poliedro  = {
    tipo: '',
    color: ''
  }

  poliedros: Poliedro[] = [];

  addPoliedro(poliedro: Poliedro) {
    const poli: Poliedro = {
      tipo: poliedro.tipo,
      color: poliedro.color,
    }
    this.poliedros.push(poli);
  }
}
