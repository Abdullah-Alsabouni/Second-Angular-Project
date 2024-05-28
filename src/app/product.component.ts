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
    
   /* Event Binding */ 
    // onSubmit() {
    //     console.log('button was clicked'); // 1.yol
    // }
    onSubmit($event: any){
        $event.stopPropagation(); // Sadece butona tıklandığında Event çalışsın
        console.log('button was clicked');
        console.log($event)
    }

    onDivClick(){ // Div'in herhangi bir noktasına tıklandığında Hem onSubmit(button was clicked) hem de onDivClick(div was clicked) çalışır. 
        console.log('div was clicked')
    }
}