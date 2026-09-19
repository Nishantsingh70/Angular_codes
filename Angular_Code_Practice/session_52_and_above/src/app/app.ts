import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { UserList } from './components/user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserList, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('session_52_and_above');

  // ============= Session 52 - setup Json-server ===================

  // Step1) create new folder and go inside that folder
  // Step2) npm install -g json-server
  // Step3) create db.json file
  // Step4) npx json-server db.json

  //==========  Session 53 - setup user service, interface, component and call json server user get api  ================


}
