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
    this.formgroup = formBuilder.group({
      // id:['',Validators.required,Validators.minLength(8)],
      // productId:['',Validators.required,Validators],
      // name:['',Validators.required,Validators],
      // price:['',Validators.required,Validators]

      id:['', Validators.compose([Validators.required])],
      productId:['', Validators.compose([Validators.required])],
      name:['', Validators.compose([Validators.required])],
      price:['', Validators.compose([Validators.required])],
    });

    this.id = this.formgroup.controls['id'];
    this.productId = this.formgroup.controls['productId'];
    this.name = this.formgroup.controls['name'];
    this.price = this.formgroup.controls['price'];
  }

  ionViewDidLoad() 
  {
    
  }

  create(product)
  {
    this.productProvider.createProduct(product);
    this.navCtrl.push(ProductPage);
    // console.log(this.product);
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
