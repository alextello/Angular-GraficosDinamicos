import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styles: [],
})
export class BarChartComponent implements OnInit {
  public barChartLabels: Label[] = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  ];

  random() {
    this.barChartData[0].data = [];
    this.barChartData[1].data = [];
    for (let index = 0; index < 7; index++) {
      this.barChartData[0].data.push(Math.floor(Math.random() * 10));
      this.barChartData[1].data.push(Math.floor(Math.random() * 10));
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
