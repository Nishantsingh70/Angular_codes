import { Component, isWritableSignal, WritableSignal, signal } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor(public route: ActivatedRoute){}

  name: WritableSignal<string> = signal<string>("");
  age: WritableSignal<number> = signal<number>(0);

  ngOnInit(){
    this.route.params.subscribe((params) => {
      console.log(params);
      this.name.set(params['name']);
      this.age.set(params['age']);
    })
  }

}
