import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  elementos = [
    {
      ruta: '/inicio',
      nombre: 'Inicio'
    },
    {
      ruta: '/typescript',
      nombre: 'Typescript'
    },
    {
      ruta: '/datos-api',
      nombre: 'Users'
    },
    {
      ruta: '/product/list',
      nombre: 'Products'
    },
    {
      ruta: '/signals/ejemplo',
      nombre: 'Signals'
    },
    {
      ruta: '/signals/children',
      nombre: 'Children'
    }
  ]
}
