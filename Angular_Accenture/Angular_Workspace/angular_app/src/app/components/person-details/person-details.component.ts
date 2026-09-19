import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent {
  //@Input() person_data: {pid: number, pname: string, city: string} | undefined;
  @Input() person_data: any | undefined;
}
