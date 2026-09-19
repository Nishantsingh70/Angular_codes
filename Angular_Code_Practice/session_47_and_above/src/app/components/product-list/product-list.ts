import { Component, WritableSignal, signal } from '@angular/core';
import { product } from '../../services/productDataType';
import { Products } from '../../services/products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  constructor(private products: Products){}

  productList: WritableSignal<product[] | undefined> = signal<product[] | undefined>(undefined);

  ngOnInit(){
    this.products.getProducts().subscribe((data) => {
      console.log(data.products);
      this.productList.set(data.products);
    })
  }

}
