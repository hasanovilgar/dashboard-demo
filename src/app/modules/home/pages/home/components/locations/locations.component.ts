import {Component, OnInit} from '@angular/core';
import {LocationsModel} from "../../../../models/locations";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  locations: LocationsModel[] = [
    {
      img: 'assets/images/germany.jpg',
      country: 'Germany',
      sales: '3,562',
      average: '56.23%'
    },
    {
      img: 'assets/images/usa.svg',
      country: 'USA',
      sales: '2,650',
      average: '25.23%'
    },
    {
      img: 'assets/images/australia.svg',
      country: 'Australia',
      sales: '956',
      average: '12.45%'
    },
    {
      img: 'assets/images/united-kingdom.webp',
      country: 'UK',
      sales: '689',
      average: '8.65%'
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
