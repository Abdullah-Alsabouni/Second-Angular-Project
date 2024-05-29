import { Component } from "@angular/core";
import { ProductRepository } from "./repository.model";
import { Product } from "./product.model";

@Component({
   selector: "app",
    template: `
    <h4> Lower-Upper-Title CasePipe </h4>
    <p> {{ title1 }}</p>
    <p> {{ title1 | lowercase }}</p>
    <p> {{ title1 | uppercase }}</p>
    <p> {{ title1 | titlecase }}</p> 

    <h4> Date Pipe</h4>
    <p> {{ today }} </p> <!-- zamanı ms cinsinden yazar-->
    <p> {{ today | date }} </p>  <!-- May 29, 2024 -->

    <h4> Decimal Pipe </h4>
    <p> {{ students }} </p>
    <p> {{ students | number }}</p>
    <p> {{ price | number }}</p>
    <p> {{ price | number: '1.2-2' }}</p> <!-- Ondalıklı kısım 2 basamaklı -->

    <h4> currency Pipe</h4>
    <p> {{ completed | currency: 'EUR'}} </p>

    <h4> Percent Pipe </h4>
    <p>{{ completed | percent }}</p>

    `,
    styleUrls: ["product.component.css"]
})


export class ProductComponent {
    today: number = Date.now();
    title1: string = 'Angular kursu';
    students: number = 21536;
    price: number = 395.9923;
    completed: number = 0.26;
}