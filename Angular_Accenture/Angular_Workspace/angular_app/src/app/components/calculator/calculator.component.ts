import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  template: `
    <h1>Calculator component</h1>
    <hr />
    <h3>Addition : {{ num1 + num2 }}</h3>
    <h3>Subtraction : {{ num1 - num2 }}</h3>
    <h3>Multiplication : {{ num1 * num2 }}</h3>
    <h3>Division : {{ num1 / num2 }}</h3>
  `,
  styles: [
    `
      h3 {
        color: green;
      }
    `,
  ],
})

export class CalculatorComponent {
  num1: number = 100;
  num2: number = 200;
}
