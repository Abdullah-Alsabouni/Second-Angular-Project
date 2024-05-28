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
    
    // onKeyUp($event: any) {   // 1.yol
    //     if($event.keyCode === 13){ // Enter'a tıklandığı anda "Enter was Pressed" mesajı gelir
    //         console.log('Enter was pressed');
    //     }
    // }

    // onKeyUp() { // 2.yol
    //         console.log('Enter was pressed');
    //     }

    // onKeyUp($event: any) {
    //     console.log($event.target.value); // 1.yol Inputa ne yazılırsa console'da görüntüle
    // }

    onKeyUp(email: any){
        console.log(email); // 2.yol
    }
}