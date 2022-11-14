import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCardTruncate',
})
export class TitleCardTruncatePipe implements PipeTransform {
  transform(value: string, size = 15): string {
    return value.length > 15 ? `${value.slice(0, size)}...` : value;
  }
}
