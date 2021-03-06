import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(public callNumber: CallNumber,
    public menuCtrl: MenuController) { }

  ngOnInit() {
  }

  callUs(){
    this.callNumber.callNumber("18008303324", true).then((res) =>{
       console.log(res)
    }).catch((err) =>{
      console.log(err)
    })
  }

  openMenu(){
    this.menuCtrl.toggle();
  }
  

}
