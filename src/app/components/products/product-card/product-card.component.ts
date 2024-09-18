import {Component, Input} from '@angular/core';
import {Product} from "../../../common/interfaceProducts";
import {CurrencyPipe, DecimalPipe, NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    NgStyle,
    CurrencyPipe,
    DecimalPipe,
    NgClass
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input({required: true}) product!: Product;
}
