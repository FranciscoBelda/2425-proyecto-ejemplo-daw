import {Component, inject} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Product} from "../../../common/interfaceProducts";
import {RouterLink} from "@angular/router";
import {ProductCardComponent} from "../product-card/product-card.component";
import {SpinnerComponent} from "../../spinner/spinner.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    RouterLink,
    ProductCardComponent,
    SpinnerComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  private readonly productService: ProductService = inject(ProductService);
  products: Product[] = [];

  constructor() {
    this.loadProducts();
  }

  private loadProducts() {
    this.productService.getProducts().subscribe(
      {
        next: value => this.products = value,
        error: err => console.error(err),
        complete: () => console.log('Products loaded')
      }
    )
  }
}
