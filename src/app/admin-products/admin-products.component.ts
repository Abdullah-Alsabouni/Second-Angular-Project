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
  selectedProduct: Product | null = null;

  constructor() {
    this.model = new ProductRepository();
    this.products = this.model.getProducts();
  }

  getSelected(product: Product): boolean {
    return product === this.selectedProduct;
  }

  editProduct(product: Product): void {
    this.selectedProduct = product;
  }

  updateProductName(name: string): void {
    if (this.selectedProduct) {
      this.selectedProduct.name = name;
    }
  }
}
