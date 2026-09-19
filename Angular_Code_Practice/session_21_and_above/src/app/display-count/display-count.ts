import { Component } from '@angular/core';
import {Counter} from '../services/counter';

@Component({
  selector: 'app-display-count',
  imports: [],
  templateUrl: './display-count.html',
  styleUrl: './display-count.css',
})
export class DisplayCount {
  constructor(public counter: Counter){}


}
