import {Component, inject, model, ModelSignal, Signal} from '@angular/core';
import {SignalService, Usuario} from "../../../services/signal.service";

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [],
  templateUrl: './children.component.html',
  styleUrl: './children.component.css'
})
export class ChildrenComponent {
  private readonly signalService: SignalService = inject(SignalService);
  usuario: Signal<Usuario> = this.signalService.usuario.asReadonly();

  value: ModelSignal<number> = model(0);

  increment(){
    this.value.update(value => value +1);
  }

}
