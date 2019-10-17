import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'HOME',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'SERVICES',
      url: '/services',
      icon: 'list'
    },
    {
      title: 'MAP',
      url: '/maps',
      icon: 'list'
    },
    {
      title: 'FORM',
      url: '/forms',
      icon: 'list'
    },
    {
      title: 'REVIEWS',
      url: '/reviews',
      icon: 'list'
    },
    {
      title: 'ABOUT US',
      url: '/about',
      icon: 'list'
    },
    {
      title: 'CONTACT US',
      url: '/contact',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
