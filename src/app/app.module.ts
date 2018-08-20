import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { AddPage } from '../pages/add/add';
import { EditPage } from '../pages/edit/edit';
import { ViewPage } from '../pages/view/view';
import { ProductPage } from '../pages/product/product';
import { ProductProvider } from '../providers/product/product';
import { HomePage } from '../pages/home/home';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AddPage,
    EditPage,
    ViewPage,
    ProductPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AddPage,
    EditPage,
    HomePage,
    ViewPage, 
    ProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, ProductProvider
  ]
})
export class AppModule {}
