import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router, public callNumber: CallNumber) {}

  appointmentcall(){
    this.callNumber.callNumber("18008303324", true).then((res) =>{
      console.log(res)
    }).catch((err) =>{
      console.log(err)
    })
  }


  submitform(){

  }


  maps(){
    this.router.navigateByUrl('/maps');
  }
}
