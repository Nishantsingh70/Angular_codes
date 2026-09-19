import { Component, WritableSignal, signal } from '@angular/core';
import { Products } from '../../services/products';
import { product } from '../../services/productDataType';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  constructor(private products: Products, private router: ActivatedRoute){}
  
    productList: WritableSignal<product[] | undefined> = signal<product[] | undefined>(undefined);
    showData: WritableSignal<product | undefined> = signal<product | undefined>(undefined);
  
    ngOnInit(){
      this.router.params.subscribe((param) => {
        console.log(param['id']);

        this.products.getProducts().subscribe((data) => {
          //console.log(data);
          const filteredData = data.products.filter((product) => product.id == param['id']);
          //console.log(filteredData);
          this.showData.set(filteredData[0]);
        })

      });

      this.products.getProducts().subscribe((data) => {
        console.log(data.products);
        this.productList.set(data.products);
      })
    }
}
