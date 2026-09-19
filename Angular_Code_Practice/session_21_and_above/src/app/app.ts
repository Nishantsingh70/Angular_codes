import { CommonModule, NgFor, NgIf, NgSwitch } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Footer } from './Footer/Footer';
import { SearchBox } from './search-box/search-box';
import { InlineTemplateBox } from './inline-template-box/inline-template-box';
import { InlineStyleBox } from './inline-style-box/inline-style-box';
import { Child } from './child/child';
import { Child2 } from './child2/child2';
import { DisplayCount } from './display-count/display-count';
import { ControlCount } from './control-count/control-count';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, NgFor, NgIf, NgSwitch, Footer, SearchBox, InlineTemplateBox, 
    InlineStyleBox, Child, Child2, DisplayCount, ControlCount ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('session_21_and_above');

  // Session 21 - Two way data binding using signals and properties with ngModel

  name:WritableSignal<string> = signal<string>('Nishant');
  age:string|number = 28;

  userDetail:WritableSignal<{name: string, age: number, email: string}> = signal<{name: string, age: number, email: string}>({
    name: "Nishant",
    age: 28,
    email: "nishant@example.com"
  });

  // updateUser(param:string, value:string){
  //   if(param == 'name'){
  //     this.userDetail.update(
  //       (prev) => ({...prev, [param]:value})
  //     );
  //   }
  // }

  updateUser(param:string, value:string){
      this.userDetail.update(
        (prev) => ({...prev, [param]:value})
      );
    }

  //========================================================================================

  // Session 22 - Two way data binding in signals with ngModel by using setter and getter methods

  userName:WritableSignal<string> = signal<string>("Nishant");

  get uName(){
    return this.userName();
  }

  set uName(name:string){
    this.userName.set(name);
  }

  studentDetail:WritableSignal<{college:string, email: string}> = signal<{college: string, email: string}>({
    college: "ABCD College",
    email: "nishant@xyz.com"
  });
 
  get studentCollegeName(){
    return this.studentDetail().college;
  }

  set studentCollegeName(college: string){
    this.studentDetail.update((prev) => ({...prev, college: college}))
  }

  get studentEmail(){
    return this.studentDetail().email;
  }

  set studentEmail(email: string){
    this.studentDetail.update((prev) => ({...prev, email: email}))
  }

  //========================================================================================

  // Session 23 - Create TODO List mini project by using signals

  todoList: WritableSignal<{id: number, title: string, completed: boolean}[]> = signal<{id: number, title: string, completed: boolean}[]>
  ([
    {id: 1, title: "Learn Signals", completed: false},
  ]);
  newTodo:WritableSignal<string> = signal<string>('');
  selectedTodo: WritableSignal<string> = signal<string>('');

  addTodo(){
    if(this.newTodo()){
      const newId = this.todoList().length + 1;
      this.todoList.update((items) => ([...items,{id: newId, title: this.newTodo(), completed: false}]))
      this.newTodo.set('');
    }
  }

  deleteTodo(id:number){
    this.todoList.update((items)=> items.filter((item)=> item.id != id));
  }

  completeTodo(id:number){
    this.todoList.update((items) => items.map((item) => item.id == id ? {...item, completed: !item.completed} : item)) 
  }

  //========================================================================================

  // Session 24 - Directives - component, Attribute - ngStyle and Structural - ngIf, ngFor, ngSwitch

  isLogin: WritableSignal<boolean> = signal<boolean>(false);
  users:WritableSignal<string[]> = signal<string[]>(['Nishant', 'John', 'Doe', 'Jane', 'Smith']);
  pColor: WritableSignal<string> = signal<string>('green');

  //========================================================================================

  // Session 25 - Structural Directives - ngIf, ngFor, ngSwitch

  // *ngFor Directive in Angular
  students: WritableSignal<string[]> = signal<string[]>(['Nishant', 'John', 'Doe', 'Jane', 'Smith']);

  studentDetails:WritableSignal<{name: string, age: number, email: string, subjects: string[]}[]> = signal<{name: string, age: number, email: string, subjects: string[]}[]>(
    [
      {name: "Nishant", age: 28, email: "nishant@example.com", subjects: ["Math", "Physics"]},
      {name: "John", age: 30, email: "john@example.com", subjects: ["Math", "Art"]},
      {name: "Doe", age: 32, email: "doe@example.com", subjects: ["Biology", "Physics"]},
      {name: "Jane", age: 25, email: "jane@example.com", subjects: ["Chemistry", "Physics"]},
      {name: "Smith", age: 27, email: "smith@example.com", subjects: ["Math", "Computer"]}
    ]
  )

  // *ngIf Directive in Angular

  show: WritableSignal<boolean> = signal<boolean>(false);
  login: WritableSignal<boolean> = signal<boolean>(false);
  block: WritableSignal<number> = signal<number>(0);

  updateBlock(){
    if(this.block() < 3){
      this.block.update((prev) => prev + 1);
    }
    else{
      this.block.set(0);
    }
  }

  // *ngSwitch Directive in Angular

  color: WritableSignal<string> = signal<string>("grey");

  changeColor(colortype: string){
    this.color.set(colortype);
  }

  //========================================================================================

  // Session 26 - Create inline component & full component without using CLI

    
  
  //========================================================================================

  // Session 27 - Create inline component & full component using CLI
  
  nums: WritableSignal<number[]> = signal<number[]>([1,2,3,4,5]);

  //========================================================================================

  // Session 28 - Passing data from parent to child component, apply loop on child with data and button click event

  clientName: WritableSignal<string> = signal<string>('Nishant Singh');
  clientNames: WritableSignal<string[]> = signal<string[]>(['Nishant', 'Peter', 'Abhi', 'Anil']);
  newUser:WritableSignal<string> = signal<string>('');

  AddUser(){
    if(this.newUser()){
      this.clientNames.update((prev) => [...prev, this.newUser()]);
      this.newUser.set('');
    }
  }

  //========================================================================================

  //Session 29 - Passing data from child to parent component, call parent function by child function

  heroNames: WritableSignal<string[]> = signal<string[]>(['Superman', 'Batman', 'Spiderman', 'Thor', 'Hulk']);
  newHero:WritableSignal<string> = signal<string>('');
  selectHeroName: WritableSignal<string> = signal<string>('');

  AddNewHero(){
    if(this.newHero()){
      this.heroNames.update((prev) => [...prev, this.newHero()]);
      this.newHero.set('');
    }
  }

  selectedHeroName(name: string){
    this.selectHeroName.set(name);
  }

  deletedHeroName(name: string){
    this.heroNames.update((prev) => prev.filter((item) => item.toLowerCase() != name.toLowerCase()))
  }

}
