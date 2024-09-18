import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../common/interfaceProducts";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http: HttpClient = inject(HttpClient);
  private readonly URL = "https://fakestoreapi.com/products/";
  constructor() { }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.URL);
  }
  getProduct(id: string): Observable<Product>{
    return this.http.get<Product>(this.URL+id);
  }
}
