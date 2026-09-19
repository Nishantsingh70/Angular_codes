import { Component } from '@angular/core';
import { DateService } from './services/date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_app';

  constructor(private dateService: DateService){
    console.log("App Component Instantiated...")
  }

  appName = this.dateService.getAppName();


}
