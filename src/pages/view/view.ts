import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../product/product';
import { Product } from '../../app/product';
import { ProductProvider } from '../../providers/product/product';

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {

  id: number;
  product: Product= new Product();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private productProvider: ProductProvider) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
    this.getProductById(this.id);
    
  }
  getProductById(id)
  {
    id = this.navParams.get('id');
    this.productProvider.getProductById(id).subscribe(product=>
    {
      this.product = product;
    });
    console.log(id);
  }

  // getProductById(id){
  //   id = this.navParams.get('id');
  //   this.product = this.productProvider.getProductsById(id);
  // }

  goBack(){
    this.navCtrl.push(ProductPage);
  }

}
