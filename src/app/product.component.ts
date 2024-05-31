import { Component } from "@angular/core";
import { ProductRepository } from "./repository.model";
import { Product } from "./product.model";


@Component({
   selector: "app",
    templateUrl: "product.component.html",
    styleUrls: ["product.component.css"]
})


export class ProductComponent {
    model: ProductRepository = new ProductRepository();

    addProduct() {
        this.model.addProduct(new Product(6, "Samsung S11", "iyi telefon", "6.jpg",10000));
    }
    deleteProduct(product: Product) {
        this.model.deleteProduct(product);
    }
    updateProduct(product: Product) {
        product.name = "updated";
    }
}