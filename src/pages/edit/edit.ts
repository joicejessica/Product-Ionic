import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../product/product';
import { Product } from '../../app/product';
import { ProductProvider } from '../../providers/product/product';
import { ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  
  productId: AbstractControl;
  name: AbstractControl;
  price: AbstractControl;
  formgroup:FormGroup;
  id: number;
  product: Product= new Product();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private productProvider: ProductProvider,
              private toastCtrl: ToastController,
              private formBuilder: FormBuilder) 
  {
    this.formgroup = formBuilder.group({
      productId:['', Validators.compose([Validators.required])],
      name:['', Validators.compose([Validators.required])],
      price:['', Validators.compose([Validators.required])],
    });

      this.productId = this.formgroup.controls['productId'];
      this.name = this.formgroup.controls['name'];
      this.price = this.formgroup.controls['price'];
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

    let toast = this.toastCtrl.create({
      message: 'Edit product successfully',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
