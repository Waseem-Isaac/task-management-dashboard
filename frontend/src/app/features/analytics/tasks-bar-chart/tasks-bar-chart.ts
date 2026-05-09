import { Component, computed, input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';
import { JsonPipe } from '@angular/common';
import { AnalyticsCardPlaceholder } from '../components/analytics-card-placeholder/analytics-card-placeholder';

@Component({
  selector: 'app-tasks-bar-chart',
  imports: [BaseChartDirective , AnalyticsCardPlaceholder],
  templateUrl: './tasks-bar-chart.html',
  styleUrl: './tasks-bar-chart.scss',
})
export class TasksBarChart {
  statusChartData = input<{labels: string[]; datasets: {label: string, data: number[]}[]} | undefined>();
  totalTasks = input<number>(0);
  
  barChartData = computed<ChartData<'bar'>>(() => {
    return {
      labels: this.statusChartData()?.labels,
      datasets: [
        ...(this.statusChartData()?.datasets ?? []).map(ds => ({
          label: ds.label,
          data: ds.data,
          backgroundColor: ds.label === 'Low' ? '#065f46' :
                            ds.label === 'Medium' ? '#e3783e' :
                            ds.label === 'High' ? '#991b1b' : '#9e9e9e',
          borderColor: ds.label === 'Low' ? '#065f46' :
                        ds.label === 'Medium' ? '#e3783e' :
                        ds.label === 'High' ? '#991b1b' : '#9E9E9E',
          borderWidth: 1,
          borderRadius: 4,
          barThickness: 32,
          maxBarThickness: 28,
        }))
      ],
    };
  });

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { position: 'bottom', labels: { color: '#424242', font: { size: 11 }, boxWidth: 12, boxHeight: 12, padding: 20 } },
      title: {
        display: true,
        align: 'start',
        font: { size: 15, weight: 'bold' },
        color: '#212121',
        padding: { bottom: 64 },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => ` ${ctx.dataset.label} priority: ${ctx.parsed.y} task(s)`,
        },
      }
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        ticks: { display: false },
        grid: { display: false },
        title: { display: false },
        border: { display: false },
      },
    },
  };

  readonly barChartType = 'bar' as const;
}
