import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-servicesdetails',
  templateUrl: './servicesdetails.page.html',
  styleUrls: ['./servicesdetails.page.scss'],
})
export class ServicesdetailsPage implements OnInit {
  data;
  details = "";

  constructor( public route: ActivatedRoute,
    public callNumber: CallNumber,
    public menuCtrl: MenuController,
    public router: Router) { }

    ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.service;

        this.details = this.data.details;
                console.log(this.details);

        this.details.replace(".", "<br>");

      }
    });

  }


  openMenu() {
    this.menuCtrl.toggle();
  }

  callUs(){
    this.callNumber.callNumber("18008303324", true).then((res) =>{
       console.log(res)
    }).catch((err) =>{
      console.log(err)
    })
  }
}
