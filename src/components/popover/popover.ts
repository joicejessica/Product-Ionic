import { Component } from '@angular/core';
import { ViewController, NavController, App } from 'ionic-angular';
import { AddPage } from '../../pages/add/add';
import { LoginPage } from '../../pages/login/login';


@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  items: any;
  text: string;

  constructor(public viewCtrl: ViewController,
              public navCtrl: NavController,
              public app: App) 
  {

    this.items = [
      {item:'test'},
      {item:'test'},
      {item:'test'},
      {item:'test'},
    ]
  }

  itemClick(item){
    this.viewCtrl.dismiss(item);
  }

  addProd(){
    this.navCtrl.push(LoginPage);
  }

  logout(){
    const root = this.app.getRootNav();
    root.popToRoot();
  }

}
