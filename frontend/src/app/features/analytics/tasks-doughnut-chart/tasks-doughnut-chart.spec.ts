import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksDoughnutChart } from './tasks-doughnut-chart';

describe('TasksDoughnutChart', () => {
  let component: TasksDoughnutChart;
  let fixture: ComponentFixture<TasksDoughnutChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksDoughnutChart],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksDoughnutChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
