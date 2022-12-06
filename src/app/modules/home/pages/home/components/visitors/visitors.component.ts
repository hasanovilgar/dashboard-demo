import { Component, OnInit } from '@angular/core';
import {ChartConfiguration} from "chart.js";

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.scss']
})
export class VisitorsComponent implements OnInit {

  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2006', '2007', '2008', '2009', '2010',],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, ], label: 'old Visitor', backgroundColor: '#FB9567', },
      { data: [ 28, 48, 40, 19, 86,], label: 'New Visitor', backgroundColor: '#f37841' }
    ]
  };

  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
