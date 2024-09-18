import {Component, Input} from '@angular/core';
import { Product } from '../../../common/interfaceProducts';
import {CurrencyPipe, DecimalPipe, NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-detail-card',
  standalone: true,
  imports: [
    NgStyle,
    CurrencyPipe,
    NgClass,
    DecimalPipe
  ],
  templateUrl: './detail-card.component.html',
  styleUrl: './detail-card.component.css'
})
export class DetailCardComponent {
  @Input() product!: Product;

}
