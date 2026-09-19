import { Component, WritableSignal, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private Router: Router) {}

  goToProfile(){
    this.Router.navigate(['Profile']);
  }

  userDetail: WritableSignal<{id: number, name: string, email: string}> = signal<{id: number, name: string, email: string}>({
    id: 3,
    name: "Kunal Sharma",
    email: "kunal@gmail.com"
  });

  profileClicked(){
    this.Router.navigate(['Profile'], {
      queryParams: {
        id: 4,
        name: "Ram Manohar",
        email: "ram@gmail.com"
      }
    })
  }

  goToAbout(){
    this.Router.navigate(['About', 'Nishant', 28]);
  }

}
