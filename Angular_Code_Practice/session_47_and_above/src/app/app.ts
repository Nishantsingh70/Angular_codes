import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product-service';
import { Products } from './services/products';
import { product } from './services/productDataType';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('session_47_and_above');

  // ==============  Session 47 - Services, Dependency Injection, reusable code, productService  ==========================

  constructor(public productService: ProductService, public products: Products){}
  productDetails: WritableSignal<{id: number, name: string, age: number}[] | undefined> = signal<{id: number, name: string, age: number}[] | undefined>(undefined)

  loadData(){
    let data = this.productService.getProducts();
    console.log(data);
    this.productDetails.set(data);   
  }

  // ========= Session 49 - Services, Dependency Injection, get method calling, products, Dummy json Products API ===========

  // ========= Session 50 - Interface, interface vs types, interface merge and extend ===========
  // We can merge and extend the interface also but in case of type it is not possible.

  productList: WritableSignal<product[] | undefined> = signal<product[] | undefined>(undefined);

  ngOnInit(){
    this.products.getProducts().subscribe((data) => {
      console.log(data.products);
      this.productList.set(data.products);
    })
  }

}
