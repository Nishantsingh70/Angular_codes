import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userList(){
    return [
      {id:1, name: "Nishant", age: 28, email: "nishant@gmail.com", city:"Bareilly"},
      {id:2, name: "Abhishek", age: 25, email: "abhishek@gmail.com", city:"Gurugram"},
      {id:3, name: "Chandan", age: 33, email: "chandan@gmail.com", city:"Ghaziabad"},
      {id:4, name: "Nimesh", age: 30, email: "nimesh@gmail.com", city:"Lucknow"},
      {id:5, name: "Ram", age: 44, email: "ram@gmail.com", city:"Patna"},
    ]
  }
}
