import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddPage } from '../add/add';
import { EditPage } from '../edit/edit';
import { ViewPage } from '../view/view';
import { Product } from '../../app/product';
import { ProductProvider } from '../../providers/product/product';
import { PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';
import { ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  products: Product[];
  product: Product;

  constructor(public navCtrl: NavController,
              private productProvider: ProductProvider,
              public popoverCtrl: PopoverController,
              private toastCtrl: ToastController) { }

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
    let toast = this.toastCtrl.create({
      message: 'Delete product successfully',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
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

  setFilterProduct(ev: any){
    this.getProducts();
    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.products = this.products.filter((product) => {
        return (product.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(popoverData => {
      console.log(popoverData);
    });
  }

}
