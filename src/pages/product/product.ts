import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddPage } from '../add/add';
import { EditPage } from '../edit/edit';
import { ViewPage } from '../view/view';
import { ProductProvider } from '../../providers/product/product';
import { PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';
import { ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  product: any;

  constructor(public navCtrl: NavController,
              private productProvider: ProductProvider,
              public popoverCtrl: PopoverController,
              private toastCtrl: ToastController,
              private httpClient: HttpClient,
              private alertCtrl: AlertController
              ) 
  {
    this.getProducts();
  }

  getProducts(): void{
    this.productProvider.getProduct().subscribe
    (products => this.product = products);
  }

  delete(id){
    let alert = this.alertCtrl.create({
      title: 'Delete Confirmation',
      message: 'Do you want to delete this record?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            let toast = this.toastCtrl.create({
              message: 'You have rejected',
              duration: 3000,
              position: 'top'
            });
          
      
          
            toast.present();
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.productProvider.deleteProduct(id).subscribe(
            product => {this.product = product});
            console.log('deleted');

            let toast = this.toastCtrl.create({
              message: 'Delete Product Successfully',
              duration: 3000,
              position: 'top'
              
            });
            toast.present();
            this.navCtrl.push(ProductPage);

          }
        }
      ]
    });
    alert.present();
    
    

  }

//---Redirect---
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

  //-----popover
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(popoverData => {
      console.log(popoverData);
    });
  }

  //----dummy data ----

  // delete(id){
  //   this.productProvider.deleteById(id);
  //   console.log(id); 
  //   let toast = this.toastCtrl.create({
  //     message: 'Delete product successfully',
  //     duration: 3000,
  //     position: 'top'
  //   });
  
  //   toast.onDidDismiss(() => {
  //     console.log('Dismissed toast');
  //   });
  
  //   toast.present();
  // }

  // setFilterProduct(ev: any){
  //   this.getProducts();
  //   const val = ev.target.value;

  //   if (val && val.trim() != '') {
  //     this.product = this.product.filter((product) => {
  //       return (product.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }


}
