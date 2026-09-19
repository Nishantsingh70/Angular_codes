import { Component, signal, WritableSignal  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserData } from './user-data/user-data';
import { AdminData } from './admin-data/admin-data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserData, AdminData],
  templateUrl: './app.html',
  // styleUrl: './app.css'
  styleUrls: ["./app.css", "./common.css"]
})
export class App {
  protected readonly title = signal('session_17_and_above');

  isLogin: WritableSignal<boolean> = signal<boolean>(false);
  show: WritableSignal<boolean> = signal<boolean>(false);
  status: WritableSignal<string> = signal<string>('notStarted');

  handleLogin(status: boolean){
    this.isLogin.set(status);
  }

  toggle(){
    this.show.set(!this.show());
  }

  handleStatus(event: Event){
    let target = event.target as HTMLSelectElement
    this.status.set(target.value)
  }

  // ============================================================================

  // Session 19 - for loop, array iteration - conditional statements

  users: WritableSignal<string[]> = signal<string[]>(['Alice', 'Bob', 'Charlie', 'David']);
  userDetails: WritableSignal<{id: number, name: string, surname: string, email: string}[]> = signal<{id: number, name: string, surname: string, email: string}[]>(
    [
      { id: 1, name: 'Alice', surname: 'Doe', email: 'alice.doe@example.com' },
      { id: 2, name: 'Bob', surname: 'Smith', email: 'bob.smith@example.com' },
      { id: 3, name: 'Charlie', surname: 'Johnson', email: 'charlie.johnson@example.com' },
      { id: 4, name: 'David', surname: 'Williams', email: 'david.williams@example.com' }
    ]
  );

  // ============================================================================

  // Session 20 - Switch case, multiple conditions - conditional statements

  status2: WritableSignal<string> = signal<string>("notStarted");

  handleSwitchstatus(event: Event){
    let target = event.target as HTMLSelectElement
    this.status2.set(target.value);
  }

}
