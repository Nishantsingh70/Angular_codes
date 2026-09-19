import { Component } from '@angular/core';
import { Counter } from '../services/counter';

@Component({
  selector: 'app-control-count',
  imports: [],
  templateUrl: './control-count.html',
  styleUrl: './control-count.css',
})
export class ControlCount {
  constructor(public counter: Counter){}

  
}
