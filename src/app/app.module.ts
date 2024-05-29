import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [ProductComponent]
})
export class AppModule { }
