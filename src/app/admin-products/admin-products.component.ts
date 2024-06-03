import { Component } from '@angular/core';
import { ProductRepository } from '../repository.model';
import { Product } from '../product.model';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
  products: Product[] = [];
  model: ProductRepository;
  selectedProduct: string | null = null;

  constructor() {
    this.model = new ProductRepository();
    // Assigning the products from the model to the component property
    this.products = this.model.getProducts();
  }

  getSelected(product: Product): boolean {
    return product.name === this.selectedProduct;
  }
}
