import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ProductPage} from '../product/product';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string; 
  splash = true;
  loginPage = LoginPage;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  login()
  {
    if(this.email == 'joice@gmail.com' && this.password == 'password')
    {
      this.navCtrl.push(ProductPage);
    }
    else
    {
      const alert = this.alertCtrl.create({
      title: 'Login Failed!',
      subTitle: 'Email/Password Incorrect',
      buttons: ['OK']});
      alert.present();
    }
  }

  }
