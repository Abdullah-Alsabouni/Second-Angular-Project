import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  // Custom Pipe
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  // value = summary
  transform(value: string, limit?: number) {
    // Custom Pipe yönetimi
    if (!value) return null;
    let _limit = limit ? limit : 20;
    return value.substring(0, _limit) + '...'; // Gelen string mesajı 0 ile 20. karakterleri yazılsın
  }
}
