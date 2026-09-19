import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.html',
  styleUrl: './child2.css',
})
export class Child2 {
  @Input() userName: string | undefined;
  @Output() selectHero = new EventEmitter();
  @Output() deleteHero = new EventEmitter();

  selectUser(name: string | undefined){
    console.log("Selected User: ", name); 
    this.selectHero.emit(name);
  }

  deleteUser(name: string | undefined){
    console.log("Deleted User: ", name);
    this.deleteHero.emit(name);
  }
}
