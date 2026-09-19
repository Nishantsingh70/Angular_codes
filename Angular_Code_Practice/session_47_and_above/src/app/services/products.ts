import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productAPIResponse } from './productDataType';

@Injectable({
  providedIn: 'root',
})
export class Products {
  constructor(private http: HttpClient){}
  apiUrl = "https://dummyjson.com/products";

  getProducts(){
    return this.http.get<productAPIResponse>(this.apiUrl);
  }

}
