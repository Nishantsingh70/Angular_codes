import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  productId: number = 100;
  productName: string = 'Notebook';

  productConfig = {
    color: 'Black',
    processor: 'Snapdragon',
  };

  productModels = ['M33', 'B22', 'S22'];

  date = new Date();

  date2 = new Date().toDateString();

  getMobileCost(): number {
    return 5000;
  }

  img_Width = 100;
  img_Height = 100;
  img_src = 'mobile.jpg';

  input_text = 'Enter Product Name';

  isButtonDisabled: Boolean = false;
  //isButtonDisabled: Boolean = true;

  saveProduct() {
    console.log(
      ` Product Id : ${this.productId} Product Name : ${this.productName}`,
    );
  }

  //backColor: string = "red";   // it is coming from css file.
  changeBackColor = true;

  changeBackgroundColor() {
    this.changeBackColor = !this.changeBackColor;
  }

  //productAvailable: boolean = false;
  productAvailable: boolean = true;

  products = [
    { productName: 'Laptop', productCost: 50000, productQuantity: 5 },
    { productName: 'Mouse', productCost: 500, productQuantity: 15 },
    { productName: 'Keyboard', productCost: 1500, productQuantity: 8 },
    { productName: 'Monitor', productCost: 12000, productQuantity: 20 },
  ];
}
