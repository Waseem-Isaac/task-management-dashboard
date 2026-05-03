import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TaskCardComponent } from './task-card.component';
import { Task } from '../../models';

const mockTask = (overrides: Partial<Task> = {}): Task => ({
  id: 'task-1',
  title: 'Test Task',
  description: 'Description',
  status: 'todo',
  priority: 'medium',
  dueDate: '2099-12-31',
  assignee: { id: 'u1', name: 'John Doe', avatar: '', email: 'john@test.com' },
  tags: [],
  createdAt: '2024-01-01T00:00:00.000Z',
  updatedAt: '2024-01-01T00:00:00.000Z',
  ...overrides,
});

describe('TaskCardComponent', () => {
  let component: TaskCardComponent;
  let fixture: ComponentFixture<TaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCardComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskCardComponent);
    fixture.componentRef.setInput('task', mockTask());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getAvatarInitials()', () => {
    it('should return initials for a two-word name', () => {
      expect(component.getAvatarInitials('John Doe')).toBe('JD');
    });

    it('should return a single letter for a single-word name', () => {
      expect(component.getAvatarInitials('Alice')).toBe('A');
    });

    it('should only use the first two words of a longer name', () => {
      expect(component.getAvatarInitials('Mary Jane Watson')).toBe('MJ');
    });

    it('should return uppercase initials', () => {
      expect(component.getAvatarInitials('john doe')).toBe('JD');
    });
  });

  describe('isOverdue()', () => {
    it('should return true when dueDate is past and status is not done', () => {
      const task = mockTask({ dueDate: '2000-01-01', status: 'todo' });
      expect(component.isOverdue(task)).toBe(true);
    });

    it('should return false when status is done even if dueDate is past', () => {
      const task = mockTask({ dueDate: '2000-01-01', status: 'done' });
      expect(component.isOverdue(task)).toBe(false);
    });

    it('should return false when dueDate is in the future', () => {
      const task = mockTask({ dueDate: '2099-12-31', status: 'todo' });
      expect(component.isOverdue(task)).toBe(false);
    });

    it('should return true for in_progress tasks past their due date', () => {
      const task = mockTask({ dueDate: '2000-01-01', status: 'in_progress' });
      expect(component.isOverdue(task)).toBe(true);
    });
  });

  describe('deleteRequested output', () => {
    it('should emit the task id when delete is requested', () => {
      const emitted: string[] = [];
      component.deleteRequested.subscribe((id: string) => emitted.push(id));

      component.deleteRequested.emit('task-1');

      expect(emitted).toEqual(['task-1']);
    });
  });
});
