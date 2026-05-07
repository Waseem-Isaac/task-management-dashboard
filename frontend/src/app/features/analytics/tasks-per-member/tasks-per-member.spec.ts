import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksPerMember } from './tasks-per-member';

describe('TasksPerMember', () => {
  let component: TasksPerMember;
  let fixture: ComponentFixture<TasksPerMember>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksPerMember],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksPerMember);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
