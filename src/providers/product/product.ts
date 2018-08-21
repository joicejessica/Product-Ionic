
import { Injectable } from '@angular/core';
import { Product } from '../../app/product';
import { PRODUCTS } from '../../app/product-data';

@Injectable()
export class ProductProvider {

  product: Product;

  constructor() {
    console.log('Hello ProductProvider Provider');
  }

  getProduct(): Product[]
  {
    return PRODUCTS;
  }

  getProductsById(id: number): Product{
    return (PRODUCTS.find(product=>product.id===id));
  }

  deleteById(id){
    const index = PRODUCTS.indexOf(this.getProductsById(id));
    PRODUCTS.splice(index,1);
  }

  createProduct(product)
  {
    PRODUCTS.push(product);
  }




}
