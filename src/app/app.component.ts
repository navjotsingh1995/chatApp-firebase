import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDNs9AFYjXYqmsjTVuhtibchDcAMZzvZcw",
    authDomain: "chat-d7470.firebaseapp.com",
    databaseURL: "https://chat-d7470.firebaseio.com",
    projectId: "chat-d7470",
    storageBucket: "chat-d7470.appspot.com",
    messagingSenderId: "70263679877"
  };
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
  
}

