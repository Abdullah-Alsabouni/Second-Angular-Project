// HostListener angular'de event oluşturmak için kullanılır
// ElementRef DOM üerinde işlemler yapmak için kullanılır
import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputEmail]'
})
export class InputEmailDirective {

  constructor(private element: ElementRef) { }
  // 'focus' bir bileşene tıklandığında çalışır. 'blur' bir bileşenden ayrıldığında gerçekleşen olay
  @HostListener('focus') onFocus() { 
    this.element.nativeElement.classList.add('bg-warning');
  } 
  @HostListener('blur') onBlur() {
    this.element.nativeElement.classList.remove('bg-warning');

    let value: string = this.element.nativeElement.value;

    if(!value.includes('@')){ // Kullanıcı @ işeretini yazmazsa alttaki işlemleri yap
      this.element.nativeElement.value = value + '@gmail.com'
    }
  }

  

}
