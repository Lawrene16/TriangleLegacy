import { Component, OnInit } from '@angular/core';
import { CallNumber } from "@ionic-native/call-number/ngx";


@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  DC = [
    {
      place: 'Washington',
      number: '2028882960'
    }
  ];

  GA = [
    {
      place: 'Marietta West',
      number: '7702990942'
    },
    {
      place: 'Macon',
      number: '6787829900'
    },{
      place: 'Buckhead',
      number: '6785057746'
    },{
      place: 'Downtown Atlanta',
      number: '4046001417'
    },{
      place: 'North Fulton',
      number: '7709180511'
    },{
      place: 'North Atlanta',
      number: '8005210643'
    },{
      place: 'South Atlanta',
      number: '4044188097'
    },
  ]
  MD = [
    {
      place: 'Annapolis',
      number: '3015239419'
    },{
      place: 'Baltimore County',
      number: '3015239419'
    },{
      place: 'Bethesda',
      number: '3015239419'
    },{
      place: 'Bowie',
      number: '3015239419'
    },{
      place: 'Brandywine',
      number: '3015239419'
    },{
      place: 'Charles County',
      number: '3015239419'
    },{
      place: 'Cheverly',
      number: '3015239419'
    },{
      place: 'Chevy Chase',
      number: '3015239419'
    },{
      place: 'Clinton',
      number: '3015239419'
    },{
      place: 'College Park',
      number: '3015239419'
    },{
      place: 'Columbia',
      number: '3015239419'
    },{
      place: 'Crofton',
      number: '3015239419'
    },{
      place: 'Clinton',
      number: '3015239419'
    },{
      place: 'College Park',
      number: '3015239419'
    },{
      place: 'Columbia',
      number: '3015239419'
    },{
      place: 'Elkridge',
      number: '3015239419'
    },{
      place: 'Ellicott',
      number: '3015239419'
    },{
      place: 'Fort Washington',
      number: '3015239419'
    },{
      place: 'Gaithersburg',
      number: '3015239419'
    },{
      place: 'Glen Burnie',
      number: '3015239419'
    },{
      place: 'Greenbelt',
      number: '3015239419'
    },{
      place: 'Kensington',
      number: '3015239419'
    },{
      place: 'Langley Park',
      number: '3015239419'
    },{
      place: 'Laurel',
      number: '3015239419'
    },{
      place: 'Linthicum',
      number: '3015239419'
    },{
      place: 'New carrollton',
      number: '3015239419'
    },{
      place: 'North Brentwood',
      number: '3015239419'
    },{
      place: 'Potomac',
      number: '3015239419'
    },{
      place: 'Rockville',
      number: '3015239419'
    },{
      place: 'Severn',
      number: '3015239419'
    },{
      place: 'Silver Spring',
      number: '3015239419'
    },{
      place: 'Takoma Park',
      number: '3015239419'
    },{
      place: 'Tatallon',
      number: '3015239419'
    },{
      place: 'Upper Marlboro',
      number: '3015239419'
    },{
      place: 'Woodmore',
      number: '3015239419'
    }
  ];

  NC = [
    {
      place: 'Apex',
      number: '7045047472'
    },{
      place: 'Burlington',
      number: '7045047472'
    },{
      place: 'Cary',
      number: '7045047472'
    },{
      place: 'Chapel Hill',
      number: '7045047472'
    },{
      place: 'Durham',
      number: '7045047472'
    },{
      place: 'Holly Springs',
      number: '7045047472'
    },{
      place: 'Knightdale',
      number: '7045047472'
    },{
      place: 'Mecklenburg',
      number: '7045047472'
    },{
      place: 'Morrisville',
      number: '7045047472'
    },{
      place: 'Raleigh',
      number: '7045047472'
    },{
      place: 'Wake Forest',
      number: '7045047472'
    },
  ];

  SC = [
    {
      place: 'Rock Hill',
      number: '7045047472'
    }
  ];

  VA = [
    {
      place: 'Alexandria',
      number: '7036731175'
    },{
      place: 'Annandale',
      number: '7036731175'
    },{
      place: 'Arlington',
      number: '7036731175'
    },{
      place: 'Ashburn',
      number: '7036731175'
    },{
      place: 'Burke',
      number: '7036731175'
    },{
      place: 'Centreville',
      number: '7036731175'
    },{
      place: 'Chantilly',
      number: '7036731175'
    },{
      place: 'Dale City',
      number: '7036731175'
    },{
      place: 'Dulles',
      number: '7036731175'
    },{
      place: 'Dumfries',
      number: '7036731175'
    },{
      place: 'Fairfax',
      number: '7036731175'
    },{
      place: 'Great Falls',
      number: '7036731175'
    },{
      place: 'Lansdowne',
      number: '7036731175'
    },{
      place: 'Leesburg',
      number: '7036731175'
    },{
      place: 'McLean',
      number: '7036731175'
    },{
      place: 'Occoquan',
      number: '7036731175'
    },{
      place: 'Potomac Mills',
      number: '7036731175'
    },{
      place: 'Reston',
      number: '7036731175'
    },{
      place: 'Springfield',
      number: '7036731175'
    },{
      place: 'Sterlin',
      number: '7036731175'
    },{
      place: 'Tysons Corner',
      number: '7036731175'
    },{
      place: 'Vienna',
      number: '7036731175'
    },{
      place: 'Woodbridge',
      number: '7036731175'
    },
    
  ];


    
  
  constructor(public callNumber: CallNumber) { }

  ngOnInit() {
  }

  callPhone(number){
    // console.log("will call")
    this.callNumber.callNumber(number, true).then((res) =>{
              console.log(res);

    }).catch((err) =>{
              console.log(err);

    })
  }
}
