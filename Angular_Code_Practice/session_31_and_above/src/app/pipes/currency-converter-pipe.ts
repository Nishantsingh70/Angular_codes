import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter',
})
export class CurrencyConverterPipe implements PipeTransform {
  transform(value: number, ...args: number[]): number {
    console.log(args);
    if(args.length){
      return value * args[0];
    }
    else{
      return value * 90;
    }
  }
}
