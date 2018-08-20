import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../product/product';
import { Product } from '../../app/product';
import { ProductProvider } from '../../providers/product/product';

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  id: number;
  product: Product= new Product();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private productProvider: ProductProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
    this.getProductById(this.id);
  }

  getProductById(id){
    id = this.navParams.get('id');
    this.product = this.productProvider.getProductsById(id);
  }

  save(id){
    id = this.navParams.get('id');
    let updated = {id: this.product.id, producId: this.product.productId, name: this.product.name, price: this.product.price}
    this.navCtrl.push(ProductPage);
  }

}
