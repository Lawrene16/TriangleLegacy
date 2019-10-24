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

  // data = {
  //   details: 'Dryer vents are one of the least suspected culprits of fires……residential or commercial! Although easily overlooked, they have the capability to cause paramount damage to your home or property, if they are not maintained properly. According to the United States National Fire Protection Agency (NFPA), in 2010 there were an estimated 16,800 reported dryer-related residential fires which ultimately resulted in 51 civilian deaths, 380 civilian injuries and $236 million in direct property damage!\n\nDryer-related fires are more likely to occur when there is a build-up of lint and debris inside the dryer hose and vent. This build-up has the tendency to obstruct the flow of hot air and gasses that would normally be exhausted to the outside of your home or property. Continued use of a dryer with a clogged vent can ultimately result in a residential or commercial fire.\n\nA quick and painless way to prevent a potential dryer-related fire?Arrange to have your dryer vents professionally cleaned and inspected at least once a year.\n\nThe advantages of dryer vent cleaning are prevention of build-up of lint and debris, reduction of the risk of dryer-related home or property fires, and improvement of the efficiency of your dryer, thereby saving you money!\n\nFor a free consultation & estimate relative to all your dryer vent cleaning needs, please give us a call!'
  // }
  constructor( public route: ActivatedRoute,
    public callNumber: CallNumber,
    public menuCtrl: MenuController,
    public router: Router) { }

    ngOnInit() {

      // document.getElementById("detailsdiv").innerHTML = this.data.details;

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.service;
        document.getElementById("detailsdiv").innerHTML = this.data.details;
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
