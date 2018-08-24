import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { Product } from '../../app/product';
import { ProductPage } from '../product/product';
import { ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  formgroup:FormGroup;
  product: Product = new Product();
  id: AbstractControl;
  productId: AbstractControl;
  name: AbstractControl;
  price: AbstractControl;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private productProvider: ProductProvider,
              private toastCtrl: ToastController,
              private formBuilder: FormBuilder)            
  {
    //validation
    this.formgroup = formBuilder.group({
      productId:['', Validators.compose([Validators.required])],
      name:['', Validators.compose([Validators.required])],
      price:['', Validators.compose([Validators.required])],
    });

    this.productId = this.formgroup.controls['productId'];
    this.name = this.formgroup.controls['name'];
    this.price = this.formgroup.controls['price'];
  }

  ionViewDidLoad() 
  { }

  create(product){
    this.productProvider.createProduct(product).subscribe
    (product => this.product = product);
    this.navCtrl.push(ProductPage);
    //show toast
    let toast = this.toastCtrl.create({
      message: 'Add Product successfully',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();

  }
}