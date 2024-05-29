import { Component } from "@angular/core";
import { ProductRepository } from "./repository.model";
import { Product } from "./product.model";

@Component({
   selector: "app",
    template: `
    {{ text | summary: 15}}  <!-- limit = 15 -->
    `,
    
    styleUrls: ["product.component.css"]
})


export class ProductComponent {
    text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, facere recusandae minus quaerat neque aliquid officia, accusamus error provident at aut sint voluptates ipsa est nemo? Nulla nam temporibus voluptatibus.";
}