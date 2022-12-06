import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  @Input() value: string = '';
  @Input() headerIcon: string = '';
  @Input() footerIcon: string = '';
  @Input() title: string = '';
  @Input() titleColor: string = '';
  @Input() footerBg: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
