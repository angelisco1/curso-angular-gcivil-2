import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descuento'
})
export class DescuentoPipe implements PipeTransform {

  transform(value: number, porcentaje: number): number {
    const resultado: number = value - (value * (porcentaje / 100))
    return resultado;
  }

}
