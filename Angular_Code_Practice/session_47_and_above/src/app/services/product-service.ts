import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(){
    console.log("Product Service called.")
  }

  getProducts(){
    return [
      {id: 1, name: "Nishant", age: 28},
      {id: 2, name: "Abhishek", age: 26},
      {id: 3, name: "Saurabh", age: 24},
      {id: 4, name: "Rahul", age: 25},
      {id: 5, name: "Rohit", age: 27}
    ]
  }
}
