import { Component, OnInit } from '@angular/core';
import {Statistic} from "../../models/statistic";
import {ChartConfiguration} from "chart.js";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  statistics: Statistic[] = [
    {
      headerIcon: 'fa-solid fa-signal',
      value: '$30200',
      footerIcon: 'fa-solid fa-chart-line',
      title: 'All Earnings',
      titleColor: '#FB9567',
      footerBg: '#FB9567'
    },
    {
      headerIcon: 'fa-regular fa-file-lines',
      value: '290+',
      footerIcon: 'fa-solid fa-chart-line',
      title: 'Page Views',
      titleColor: '#09C885',
      footerBg: '#09C885'
    },
    {
      headerIcon: 'fa-solid fa-calendar',
      value: '145',
      footerIcon: 'fa-solid fa-chart-line',
      title: 'Task Completed',
      titleColor: '#FF5D73',
      footerBg: '#FF5D73'
    },
    {
      headerIcon: 'fa-solid fa-download',
      value: '500',
      footerIcon: 'fa-solid fa-chart-line',
      title: 'Downloads',
      titleColor: '#0DAAAD',
      footerBg: '#0DAAAD'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
