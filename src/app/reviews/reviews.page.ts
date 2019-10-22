import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {

  constructor(private callNumber: CallNumber, private menuCtrl: MenuController) { }

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
