import { Component, OnInit } from '@angular/core';
import {ChartConfiguration} from "chart.js";

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {

  barChartLegend = false;
  barChartPlugins = [];

  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['UI', 'UX', 'WEB', 'App', 'SEO'],
    datasets: [
      { data: [ 100, 180, 150, 200, 50], label: '',  backgroundColor: 'white' }
    ]
  };

  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };


  constructor() { }

  ngOnInit(): void {
  }

}
