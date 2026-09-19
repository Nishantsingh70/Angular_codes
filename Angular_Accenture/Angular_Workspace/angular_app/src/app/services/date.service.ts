import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  getAppName(){
    return "My First Angular App";
  }

  getCurrentDate(){
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    return `${date}-${month}-${year}`;
  }
}
