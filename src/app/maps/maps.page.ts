import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  DC = [
    {
      place: 'Washington',
      number: '(202) 888-2960'
    }
  ];

  MD = [
    {
      place: 'Annapolis',
      number: '(301) 523-9419'
    },{
      place: 'Baltimore County',
      number: '(301) 523-9419'
    },{
      place: 'Bethesda',
      number: '(301) 523-9419'
    },{
      place: 'Bowie',
      number: '(301) 523-9419'
    },{
      place: 'Brandywine',
      number: '(301) 523-9419'
    },{
      place: 'Charles County',
      number: '(301) 523-9419'
    },{
      place: 'Cheverly',
      number: '(301) 523-9419'
    },{
      place: 'Chevy Chase',
      number: '(301) 523-9419'
    },{
      place: 'Clinton',
      number: '(301) 523-9419'
    },{
      place: 'College Park',
      number: '(301) 523-9419'
    },{
      place: 'Columbia',
      number: '(301) 523-9419'
    },{
      place: 'Crofton',
      number: '(301) 523-9419'
    },{
      place: 'Clinton',
      number: '(301) 523-9419'
    },{
      place: 'College Park',
      number: '(301) 523-9419'
    },{
      place: 'Columbia',
      number: '(301) 523-9419'
    },{
      place: 'Elkridge',
      number: '(301) 523-9419'
    },{
      place: 'Ellicott',
      number: '(301) 523-9419'
    },{
      place: 'Fort Washington',
      number: '(301) 523-9419'
    },{
      place: 'Gaithersburg',
      number: '(301) 523-9419'
    },{
      place: 'Glen Burnie',
      number: '(301) 523-9419'
    },{
      place: 'Greenbelt',
      number: '(301) 523-9419'
    },{
      place: 'Kensington',
      number: '(301) 523-9419'
    },{
      place: 'Langley Park',
      number: '(301) 523-9419'
    },{
      place: 'Laurel',
      number: '(301) 523-9419'
    },{
      place: 'Linthicum',
      number: '(301) 523-9419'
    },{
      place: 'New carrollton',
      number: '(301) 523-9419'
    },{
      place: 'North Brentwood',
      number: '(301) 523-9419'
    },{
      place: 'Potomac',
      number: '(301) 523-9419'
    },{
      place: 'Rockville',
      number: '(301) 523-9419'
    },{
      place: 'Severn',
      number: '(301) 523-9419'
    },{
      place: 'Silver Spring',
      number: '(301) 523-9419'
    },{
      place: 'Takoma Park',
      number: '(301) 523-9419'
    },{
      place: 'Tatallon',
      number: '(301) 523-9419'
    },{
      place: 'Upper Marlboro',
      number: '(301) 523-9419'
    },{
      place: 'Woodmore',
      number: '(301) 523-9419'
    }
  ];

  NC = [
    {
      place: 'Apex',
      number: '(704) 504-7472'
    },{
      place: 'Burlington',
      number: '(704) 504-7472'
    },{
      place: 'Cary',
      number: '(704) 504-7472'
    },{
      place: 'Chapel Hill',
      number: '(704) 504-7472'
    },{
      place: 'Durham',
      number: '(704) 504-7472'
    },{
      place: 'Holly Springs',
      number: '(704) 504-7472'
    },{
      place: 'Knightdale',
      number: '(704) 504-7472'
    },{
      place: 'Mecklenburg',
      number: '(704) 504-7472'
    },{
      place: 'Morrisville',
      number: '(704) 504-7472'
    },{
      place: 'Raleigh',
      number: '(704) 504-7472'
    },{
      place: 'Wake Forest',
      number: '(704) 504-7472'
    },
  ];

  SC = [
    {
      place: 'Rock Hill',
      number: 'XXXXX'
    }
  ];

  VA = [
    {
      place: 'Alexandria',
      number: '(202) 888-2960'
    },{
      place: 'Annandale',
      number: '(202) 888-2960'
    },{
      place: 'Arlington',
      number: '(202) 888-2960'
    },{
      place: 'Ashburn',
      number: '(202) 888-2960'
    },{
      place: 'Burke',
      number: '(202) 888-2960'
    },{
      place: 'Centreville',
      number: '(202) 888-2960'
    },{
      place: 'Chantilly',
      number: '(202) 888-2960'
    },{
      place: 'Dale City',
      number: '(202) 888-2960'
    },{
      place: 'Dulles',
      number: '(202) 888-2960'
    },{
      place: 'Dumfries',
      number: '(202) 888-2960'
    },{
      place: 'Fairfax',
      number: '(202) 888-2960'
    },{
      place: 'Great Falls',
      number: '(202) 888-2960'
    },{
      place: 'Lansdowne',
      number: '(202) 888-2960'
    },{
      place: 'Leesburg',
      number: '(202) 888-2960'
    },{
      place: 'McLean',
      number: '(202) 888-2960'
    },{
      place: 'Occoquan',
      number: '(202) 888-2960'
    },{
      place: 'Potomac Mills',
      number: '(202) 888-2960'
    },{
      place: 'Reston',
      number: '(202) 888-2960'
    },{
      place: 'Springfield',
      number: '(202) 888-2960'
    },{
      place: 'Sterlin',
      number: '(202) 888-2960'
    },{
      place: 'Tysons Corner',
      number: '(202) 888-2960'
    },{
      place: 'Vienna',
      number: '(202) 888-2960'
    },{
      place: 'Woodbridge',
      number: '(202) 888-2960'
    },
    
  ];


    
  
  constructor() { }

  ngOnInit() {
  }

}
