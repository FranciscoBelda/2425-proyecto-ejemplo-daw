import {Component, computed, inject, Signal, signal, WritableSignal} from '@angular/core';
import {SignalService, Usuario} from "../../../services/signal.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-ejemplos',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './ejemplos.component.html',
  styleUrl: './ejemplos.component.css'
})
export class EjemplosComponent {
  nombre: WritableSignal<string> = signal<string>("John Doe");
  numero: WritableSignal<number> = signal<number>(0);
  /* READ ONLY */
  nombreReadOnly: Signal<string> = this.nombre.asReadonly();

  /* Computed Signals */
  count: WritableSignal<number> = signal<number>(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  /* SERVICE */
  private signalService: SignalService = inject(SignalService);
  usuario: Signal<Usuario> = this.signalService.usuario.asReadonly();
  nombreForm: string = "";
  emailForm: string = "";
  estadoForm: string = "";

  cambiarNombre() {
    this.nombre.set('Nuevo nombre');
    this.count.set(0);
  }

  nuevoNumero() {
    this.numero.update(valorActual => valorActual + 2);
    this.count.update(valorActual => valorActual + 1);
  }


  crearUsuario() {
    this.signalService.modificarUsuario(
      {
        nombre: this.nombreForm,
        email: this.emailForm,
        estado: this.estadoForm
      });
  }
}
