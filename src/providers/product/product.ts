
import { Injectable } from '@angular/core';
import { Product } from '../../app/product';
import { PRODUCTS } from '../../app/product-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class ProductProvider {

  product: Product;

  constructor(private httpClient : HttpClient) 
  { }

  //------------REST-------------
  getProduct(): Observable<any>
  {
    // return this.httpClient.get("/all")
    return this.httpClient.get("/api/productPage/all");
  }

  getProductById(id): Observable<any>
  {
    return this.httpClient.get("/api/productPage/view/"+id)
  }

  createProduct(product): Observable<any>
  {
    return this.httpClient.post<Product>("/api/productPage/create", product)
  }

  deleteProduct(id): Observable<any>
  {
    return this.httpClient.delete("/api/productPage/delete/"+id)
  }

  updateProduct(id, product): Observable<any>
  {
    return this.httpClient.put("/api/productPage/update/"+id, product)
  }


  //---------dummy data ------

  // createProduct(product)
  // {
  //   PRODUCTS.push(product);
  // }

  // getProduct(): Product[]
  // {
  //   return PRODUCTS;
  // }

  // getProductsById(id: number): Product{
  //   return (PRODUCTS.find(product=>product.id===id));
  // }

  // deleteById(id){
  //   const index = PRODUCTS.indexOf(this.getProductsById(id));
  //   PRODUCTS.splice(index,1);
  // }
}
