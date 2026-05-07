import { Component, input } from '@angular/core';
import { MatProgressBar } from "@angular/material/progress-bar";

@Component({
  selector: 'app-tasks-per-member',
  imports: [MatProgressBar],
  templateUrl: './tasks-per-member.html',
  styleUrl: './tasks-per-member.scss',
})
export class TasksPerMember {
  members = input<{ name: string, email: string, avatarUrl: string, taskCount: number }[]>([]);
  totalTasks = input<number>(0);

  getMemberLoadPercentage(memberTaskCount: number): number {
    if (this.totalTasks() === 0) return 0;
    return (memberTaskCount / this.totalTasks()) * 100;
  }
}

