import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

import { Router, NavigationExtras } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  services = [
    {
      title: 'Air Duct Cleaning',
      details: 'As much as we would love to be able to predict when a disaster is going to strike, there is no way to do so. However, that doesn’t mean you should wait until it happens to find a local home restoration expert. At Triangle Legacy, we offer experience dealing with damage from fire, smoke, mold, mildew, and floods. Our team of dedicated experts will work with you to ensure you get the results you need in your difficult time. No job is too big or too small because we have handled it all. Our team of home restoration experts understand how important it is to provide you with the level of service you deserve. With ample experience in the field, we can easily step in and help you take control of the damage quickly and easily. Not only do we get the job done quickly, but we also ensure it is done right from the beginning. Because we offer 24/7 services, you don’t have to worry about being stuck waiting for days to get the help you need. We understand how important it is to act quickly in the wake of a disaster. Our home renovation experts will go through everything with you to ensure you get the results you need. Thanks to our free estimates, you will know what to expect right from the start. Give us a call to schedule your consultation today.'
    },
    {
      title: 'Commercial Carpet Cleaning',
      details: ''
    },{
      title: 'Drain Cleaning',
      details: ''
    },{
      title: 'Dryer Vent Cleaning',
      details: ''
    },{
      title: 'Emergency Restoration',
      details: ''
    },{
      title: 'Fire Restoration',
      details: ''
    },{
      title: 'Flood Mitigation',
      details: ''
    },{
      title: 'Hoarding Clean Up',
      details: ''
    },{
      title: 'Mold Removal',
      details: ''
    },{
      title: 'Odor Removal',
      details: ''
    },{
      title: 'Power Washing',
      details: ''
    },{
      title: 'Residential Carpet Cleaning',
      details: ''
    },{
      title: 'Rug Cleaning',
      details: ''
    },{
      title: 'Smoke Removal',
      details: ''
    },{
      title: 'Tile Cleaning',
      details: ''
    },{
      title: 'Upholstery Cleaning',
      details: ''
    },{
      title: 'Water Damage Repair',
      details: ''
    }
  ]
  constructor(public router: Router, public menuCtrl: MenuController) { }

  ngOnInit() {
  }

  showDetails(i){
    let navigationExtras: NavigationExtras = {
      state: {
        service: this.services[i]
      }
    };

    console.log(i)
    
    this.router.navigate(['servicesdetails'], navigationExtras);

    // this.router.navigateByUrl('/servicesdetails')
  }

  openMenu(){
    this.menuCtrl.toggle();
  }

}
