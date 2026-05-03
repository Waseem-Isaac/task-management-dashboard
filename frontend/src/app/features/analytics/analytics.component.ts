/**
 * Analytics dashboard displaying task statistics with grouped bar charts.
 * SMART component (fetches data, contains business logic)
 */
import { Component, computed, inject, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';
import { TaskService } from '../tasks/task.service';

@Component({
  selector: 'app-analytics',
  imports: [BaseChartDirective],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss',
})
export class AnalyticsComponent implements OnInit {
  private taskService = inject(TaskService);

  ngOnInit(): void {
    this.taskService.loadTasks().subscribe();
  }

  // Grouped bar: X-axis = Status, 3 bars per group = Priority (Low / Medium / High)
  barChartData = computed<ChartData<'bar'>>(() => {
    const tasks = this.taskService.tasks();

    const statuses = ['todo', 'in_progress', 'done'] as const;
    type Priority = 'low' | 'medium' | 'high';

    const count = (status: (typeof statuses)[number], priority: Priority) =>
      tasks?.filter((t) => t.status === status && t.priority === priority).length;

    return {
      labels: ['To Do', 'In Progress', 'Done'],
      datasets: [
        {
          label: 'Low',
          data: statuses.map((s) => count(s, 'low')),
          backgroundColor: 'rgba(56, 142, 60, 0.75)',
          borderColor: '#388E3C',
          borderWidth: 1,
          borderRadius: 4,
        },
        {
          label: 'Medium',
          data: statuses.map((s) => count(s, 'medium')),
          backgroundColor: 'rgba(245, 124, 0, 0.75)',
          borderColor: '#F57C00',
          borderWidth: 1,
          borderRadius: 4,
        },
        {
          label: 'High',
          data: statuses.map((s) => count(s, 'high')),
          backgroundColor: 'rgba(211, 47, 47, 0.75)',
          borderColor: '#D32F2F',
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    };
  });

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Tasks by Status & Priority',
        align: 'start',
        font: { size: 15, weight: 'bold' },
        color: '#212121',
        padding: { bottom: 16 },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => ` ${ctx.dataset.label} priority: ${ctx.parsed.y} task(s)`,
        },
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1, precision: 0 },
        grid: { color: 'rgba(0,0,0,0.06)' },
        title: { display: true, text: 'Number of tasks', color: '#757575' },
      },
    },
  };

  readonly barChartType = 'bar' as const;
}
