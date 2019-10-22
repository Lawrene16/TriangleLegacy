import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicesdetails',
  templateUrl: './servicesdetails.page.html',
  styleUrls: ['./servicesdetails.page.scss'],
})
export class ServicesdetailsPage implements OnInit {
  data;
  details = "";

  constructor( public route: ActivatedRoute,public router: Router) { }

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

}
