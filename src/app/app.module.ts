import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product.component';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { CommonModule } from '@angular/common';
import { InputEmailDirective } from './input-email.directive';



@NgModule({
  declarations: [
    ProductComponent,
    SummaryPipe,
    InputEmailDirective
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
