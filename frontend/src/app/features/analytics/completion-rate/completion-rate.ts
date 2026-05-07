import { Component, input } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
@Component({
  selector: 'app-completion-rate',
  imports: [ MatProgressBar ],
  templateUrl: './completion-rate.html',
  styleUrl: './completion-rate.scss',
})
export class CompletionRate {
  completionRateData = input<{ completionRate:number, doneCount: number, todoCount: number, inProgressCount: number, overdueCount: number }>();
}
