import { Component, computed, input } from '@angular/core';
import { Chart, ChartData, ChartOptions } from 'chart.js';
import { AnalyticsCardPlaceholder } from '../components/analytics-card-placeholder/analytics-card-placeholder';
import { BaseChartDirective } from 'ng2-charts';

export const doughnutCenterPlugin = {
  id: 'doughnutCenter',
  beforeDraw(chart: any) {
    const { ctx, chartArea: { top, width, height } } = chart;
    const centerX = width / 2 + chart.chartArea.left;
    const centerY = top + height / 2;

    const total = chart.data.datasets[0].data
      .reduce((a: number, b: number) => a + b, 0);

    ctx.save();

    // big number
    ctx.font = 'bold 28px Inter, sans-serif';
    ctx.fillStyle = '#212121';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${total}`, centerX, centerY - 10);

    // label below
    ctx.font = '500 16px Inter, sans-serif';
    ctx.fillStyle = '#9a8070';
    ctx.fillText('tasks', centerX, centerY + 14);

    ctx.restore();
  }
};

@Component({
  selector: 'app-tasks-doughnut-chart',
  imports: [BaseChartDirective, AnalyticsCardPlaceholder],
  templateUrl: './tasks-doughnut-chart.html',
  styleUrl: './tasks-doughnut-chart.scss',
})
export class TasksDoughnutChart {
  priorityBreakdownChartData = input<{ labels: string[]; datasets: {label: string, data: number[]}[] }>();
  totalTasks = input<number>(0);
  plugins = [doughnutCenterPlugin];

  // doughnutChartData = c
  doughnutChartData = computed<ChartData<'doughnut'>>(() => {
    console.log('Computing doughnut chart data with input:', this.priorityBreakdownChartData()?.datasets[0]);
    return {
      labels: this.priorityBreakdownChartData()?.labels,
      datasets: [
        ...(this.priorityBreakdownChartData()?.datasets ?? []).map(ds => ({
          label: ds.label,
          data: ds.data,
          backgroundColor: (this.priorityBreakdownChartData()?.labels ?? []).map(label =>
            label === 'Low' ? '#065f46' :
            label === 'Medium' ? '#e3783e' :
            label === 'High' ? '#991b1b' : '#9e9e9e'
          ),
          borderColor: (this.priorityBreakdownChartData()?.labels ?? []).map(label =>
            label === 'Low' ? '#065f46' :
            label === 'Medium' ? '#e3783e' :
            label === 'High' ? '#991b1b' : '#9E9E9E'
          ),
          borderWidth: 1,
        }))
      ],
    };
  });

  doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    cutout: '80%',
    maintainAspectRatio: true,
    plugins: {
      legend: { position: 'right', align :'center', labels: { color: '#424242', font: { size: 11 }, boxWidth: 12, boxHeight: 12, padding: 20 } },
      title: {
        display: false
      },
      
      tooltip: {
        callbacks: {
          label: (ctx) => ` ${ctx.dataset.label} priority: ${ctx.parsed} task(s)`,
        },
      },

    },
  };

    readonly doughnutChartType = 'doughnut' as const;
}
