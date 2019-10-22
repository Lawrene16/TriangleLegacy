import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
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
      icon: 'Home Button.png'
    },
    {
      title: 'SERVICES',
      url: '/services',
      icon: 'Service Button.png'
    },
    {
      title: 'MAP',
      url: '/maps',
      icon: 'Map Button.png'
    },
    {
      title: 'FORM',
      url: '/forms',
      icon: 'Form Symbol.png'
    },
    {
      title: 'REVIEWS',
      url: '/reviews',
      icon: 'Review Button.png'
    },
    {
      title: 'ABOUT US',
      url: '/about',
      icon: 'About Us Button.png'
    },
    {
      title: 'CONTACT US',
      url: '/contact',
      icon: 'Contact Us Button.png'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#a3cddc');
      // this.statusBar.co
      this.statusBar.overlaysWebView(false); 
      this.splashScreen.hide();
    });
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }
}
