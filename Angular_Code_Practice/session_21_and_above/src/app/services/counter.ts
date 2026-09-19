import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {
  count: WritableSignal<number> = signal<number>(0);

  incrementCount(){
    this.count.update((prev) => prev + 1);
  }

  decrementCount(){
    if(this.count() > 0){
      this.count.update((prev) => prev -1);
    }
  }

  resetCount(){
    this.count.set(0);
  }
}
