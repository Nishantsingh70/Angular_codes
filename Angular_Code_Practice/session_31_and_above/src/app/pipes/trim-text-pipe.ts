import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimText',
})
export class TrimTextPipe implements PipeTransform {
  transform(value: string, ...args: number[]): string {
    //return "bla bla";
    console.log(args);
    if(args[0] && args[1]){
        if(args[0] > args[1]){
          return value.substring(args[1], args[0]);
        }
        else {
          return value.substring(args[0], args[1]);
        }
    }
    else if(args[0] || args[1]){
        return value.substring(0, args[0] ? args[0] : args[1]);
    }
    else{
        return value.substring(0, 5);
    }
  }
}
