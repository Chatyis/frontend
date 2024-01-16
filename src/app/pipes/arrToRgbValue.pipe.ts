import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrToRgbValue',
  standalone: true
})
export class ArrToRgbValuePipe implements PipeTransform {
  transform(value: Array<Number>): any {
    return '('+value[0]+','+value[1]+','+value[2]+')';
  }
}
