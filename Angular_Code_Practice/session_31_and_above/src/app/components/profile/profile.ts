import { Component, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  constructor(public route: ActivatedRoute){}

  Id: WritableSignal<number> = signal<number>(0);
  name: WritableSignal<string> = signal<string>("");
  email:WritableSignal<string> = signal<string>("");

  ngOnInit(){
    this.route.queryParams.subscribe(
      (params)=> {
        console.log(params)
        this.Id.set(params['id']);
        this.name.set(params['name']);
        this.email.set(params['email']);    
    }
  
  );

  }

}
