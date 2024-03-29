import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

// import HC_grouped from "highcharts-grouped-categories";
// HC_grouped(Highcharts);

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollComponent implements OnInit {
  chart: any;

  ngOnInit(): void {
    this.createChartLine();
  }

  private createChartLine(): void {

    this.chart = Highcharts.chart({
      chart: {
        renderTo: 'chart-line',
        type: 'bar',
        scrollablePlotArea: {
            minHeight: 800
        },
        marginRight: 30
      },
      xAxis: {
        type: 'category',
      },
      series: [{
        name: 'Votes',
        data: [
          ['Gantt chart', 1000],
          ['Autocalculation and plotting of trend lines', 575],
          ['Allow navigator to have multiple data series', 523],
          ['Implement dynamic font size', 427],
          ['Multiple axis alignment control', 399],
          ['Stacked area (spline etc) in irregular datetime series', 309],
          ['Adapt chart height to legend height', 278],
          ['Export charts in excel sheet', 239],
          ['Toggle legend box', 235],
          ['Venn Diagram', 203],
          ['Add ability to change Rangeselector position', 182],
          ['Draggable legend box', 157],
          ['Sankey Diagram', 149],
          ['Add Navigation bar for Y-Axis in Highcharts Stock', 144],
          ['Grouped x-axis', 143],
          ['ReactJS plugin', 137],
          ['3D surface charts', 134],
          ['Draw lines over a stock chart, for analysis purpose', 118],
          ['Data module for database tables', 118],
          ['Draggable points', 117]
        ]
      }]
    } as any);
  }
}
