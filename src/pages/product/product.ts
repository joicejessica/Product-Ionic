import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddPage } from '../add/add';
import { EditPage } from '../edit/edit';
import { ViewPage } from '../view/view';
import { Product } from '../../app/product';
import { ProductProvider } from '../../providers/product/product';
import { PRODUCTS } from '../../app/product-data';


@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  products: Product[];
  product: Product;

  constructor(public navCtrl: NavController,
              private productProvider: ProductProvider) { }

  getProducts(): void{
    this.products = this.productProvider.getProduct();
  }

  ngOnInit() 
  {
    this.getProducts();
  }

  delete(id){
    this.productProvider.deleteById(id);
    console.log(id); 
  }

  onPageAdd()
  {
    this.navCtrl.push(AddPage);
  }

  onPageEdit(id)
  {
    this.navCtrl.push(EditPage, {id: id});
  }

  onPageView(id)
  {
    this.navCtrl.push(ViewPage, {id: id});
  }
}
