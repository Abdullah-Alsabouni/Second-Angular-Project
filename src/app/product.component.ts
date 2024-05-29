import { Component } from "@angular/core";
import { ProductRepository } from "./repository.model";
import { Product } from "./product.model";

@Component({
   selector: "app",
    template: `<input [(ngModel)] = "email" (keyup.enter) = "onKeyUp()" /> <!-- ngModel kullanarak Two Binding işlemi yapılır -->
    <br>
    <span> {{ email }} </span> 
    `,
    styleUrls: ["product.component.css"]
})


export class ProductComponent {
    model: ProductRepository = new ProductRepository();
    

    email = "email@abdullah.com";
    
    onKeyUp(){
        console.log(this.email); 
    }
}