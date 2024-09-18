import {Component, effect, viewChild} from '@angular/core';
import {ChildrenComponent} from "../children/children.component";

@Component({
  selector: 'app-view-children',
  standalone: true,
  imports: [
    ChildrenComponent
  ],
  templateUrl: './view-children.component.html',
  styleUrl: './view-children.component.css'
})
export class ViewChildrenComponent {
  valorInicial = 10;

  childComponent = viewChild.required(ChildrenComponent);

  constructor() {
    effect(() => {
      alert(this.childComponent().value());
    });
  }
}
