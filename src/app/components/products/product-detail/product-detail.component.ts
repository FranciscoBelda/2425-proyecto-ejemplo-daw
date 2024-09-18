import {Component, inject, Input, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Product} from "../../../common/interfaceProducts";
import {DetailCardComponent} from "../detail-card/detail-card.component";
import {SpinnerComponent} from "../../spinner/spinner.component";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    DetailCardComponent,
    SpinnerComponent
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  @Input('id') id!: string;
  private readonly productService: ProductService = inject(ProductService);
  product!: Product;

  ngOnInit(): void {
    this.loadProduct();
  }

  private loadProduct() {
    this.productService.getProduct(this.id).subscribe(
      {
        next: value => this.product = value,
        error: err => console.error(err),
        complete: () => console.log('Product '+this.product.title+' has been loaded')
      }
    )
  }


}
