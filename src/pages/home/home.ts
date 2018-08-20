import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  places: {title: string}[] = [];
  constructor(public navCtrl: NavController) {

  }


}
