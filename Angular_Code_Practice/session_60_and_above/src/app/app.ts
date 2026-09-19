import { Component, effect, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatBadgeModule, MatCardModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('session_60_and_above');

  // Effect keyword/function use case in Angular project - Interview question

  count: WritableSignal<number> = signal<number>(0);
  constructor(){
    effect(() =>{
      console.log("signal call from effect " + this.count());
    })
  }
}
