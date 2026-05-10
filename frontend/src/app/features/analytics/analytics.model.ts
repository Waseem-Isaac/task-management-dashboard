// Put all analytics models and types in this file

export interface Analytics {
  totalTasks: number;
  statusChartData: AnalyticsChartData;
  completionRateData: CompletionRateData;
  priorityBreakdownChartData: AnalyticsChartData;
  tasksPerMember: AnalyticsMember[];
  statistics: AnalyticsStatistic[];
};

// Status chart data model
export interface AnalyticsChartData { labels: string[]; datasets: { label: string, data: number[] }[] };

// Completion rate data model
export interface CompletionRateData { completionRate:number, doneTasks: number, todoTasks: number, inProgressTasks: number };

// Analytics Member model
export interface AnalyticsMember {
  name: string;
  email: string;
  avatarUrl: string;
  taskCount: number;
}

// Analytics Statistics model
export interface AnalyticsStatistic {
  type: string;
  title: string;
  value: number;
  changeSinceYesterday: number;
}

// Activity History Log model
export interface HistoryLogEntry {
  type: 'status_change' | 'priority_change' | 'assignee_change';
  oldValue: string;
  newValue: string;
  user: { name: string; email: string; avatarUrl: string };
  task: { referenceId: string, title: string, _id: string };
  timestamp: string;
}