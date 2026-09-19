import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login],
  templateUrl: './app.html',
  // template: `<h1>Inline Template {{name}} - {{age}}  - {{getName()}} - {{getSum(4,5)}}</h1>`,
  styleUrl: './app.css'
})
export class App {

  //=============================  Interpolation - Session 5 ===================================

  protected readonly title = signal('angular_21_project');
  // properties (not variables)
  name = "Nishit";
  age = 21;

  getName(){
    let name = "Nishant";
    return name;
  }
  updateName(){
    this.name = "Ankita";
  }

  getSum(a:number, b:number){
    return a + b;
  }

  callMe(){
    alert("Hello World");
  }

  count = 0;
  counter(operator: string){
    if(operator.toLowerCase() == 'minus'){
      this.count > 0 && this.count--;
    }
    else if(operator.toLowerCase() == 'plus'){
      this.count++;
    }

    // run function inside function
    this.callMe();
  }

  // ========= Session 9 - Events handling and checking the types of events in input, select/option, button and mouse events. ===============
  handleEvent(event: any){
    console.log(event.target.value);
  }

  handleEvents(eventName: string){
    console.log(eventName);
  }

  //=============================  Session 10 Data types ===================================
  data: string|number|undefined|boolean = 20;

  updateData(){
    this.data="Nishant";
  }

  changeDataType(val: boolean){
    this.data=val;
  }

  passParameters(val: number, user: string){
    this.data=val;
    console.log(user);

    console.log(this.Sum(15,22));
  }

  Sum(a:number, b:number): number{
    return a + b;
  }

  handleEvent2(event: PointerEvent | Event | MouseEvent){
    console.log(event);
  }

}
