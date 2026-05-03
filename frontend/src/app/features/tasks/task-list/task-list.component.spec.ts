import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { signal } from '@angular/core';
import { of } from 'rxjs';
import { TaskListComponent } from './task-list.component';
import { TaskService } from '../task.service';
import { SearchService } from '../../../../core/services/search.service';
import { Task } from '../models';

const mockAssignee = { id: 'u1', name: 'John Doe', avatar: '', email: 'john@test.com' };

const makeTask = (overrides: Partial<Task> = {}): Task => ({
  _id: 'task-1',
  title: 'Test Task',
  description: 'Description',
  status: 'todo',
  priority: 'medium',
  dueDate: '2099-12-31',
  assignee: mockAssignee,
  tags: [],
  createdAt: '2024-01-01T00:00:00.000Z',
  updatedAt: '2024-01-01T00:00:00.000Z',
  ...overrides,
});

const todoTask = makeTask({ _id: 't1', status: 'todo', title: 'Todo Item' });
const inProgressTask = makeTask({ _id: 't2', status: 'in_progress', title: 'In Progress Item' });
const doneTask = makeTask({ _id: 't3', status: 'done', title: 'Done Item' });

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  const tasksSignal = signal<Task[]>([todoTask, inProgressTask, doneTask]);
  const isLoadingSignal = signal(false);

  beforeEach(async () => {
    const fakeTaskService = {
      tasks: tasksSignal.asReadonly(),
      isLoading: isLoadingSignal.asReadonly(),
      users: signal([]),
      loadTasks: vi.fn(() => of([])),
      deleteTask: vi.fn(() => of(void 0)),
      dropTask: vi.fn(),
    };

    const fakeSearchService = {
      searchTerm: signal(''),
    };

    await TestBed.configureTestingModule({
      imports: [TaskListComponent],
      providers: [
        provideRouter([]),
        { provide: TaskService, useValue: fakeTaskService },
        { provide: SearchService, useValue: fakeSearchService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('filteredTasks', () => {
    it('should return all tasks when no filter is active', () => {
      expect(component.filteredTasks().length).toBe(3);
    });

    it('should filter tasks by status', () => {
      component.setFilter('todo');
      fixture.detectChanges();

      const result = component.filteredTasks();
      expect(result.every((t) => t.status === 'todo')).toBe(true);
      expect(result.length).toBe(1);
    });

    it('should return all tasks when filter is cleared', () => {
      component.setFilter('todo');
      component.setFilter(null);
      fixture.detectChanges();

      expect(component.filteredTasks().length).toBe(3);
    });

    it('should filter tasks by priority', () => {
      tasksSignal.set([
        makeTask({ _id: 'h1', priority: 'high', status: 'todo' }),
        makeTask({ _id: 'l1', priority: 'low', status: 'todo' }),
      ]);
      component.activePriority.set('high');
      fixture.detectChanges();

      expect(component.filteredTasks().every((t) => t.priority === 'high')).toBe(true);
      tasksSignal.set([todoTask, inProgressTask, doneTask]);
    });
  });

  describe('setFilter()', () => {
    it('should set activeStatus signal', () => {
      component.setFilter('in_progress');
      expect(component.activeStatus()).toBe('in_progress');
    });

    it('should accept null to clear the filter', () => {
      component.setFilter('done');
      component.setFilter(null);
      expect(component.activeStatus()).toBeNull();
    });
  });

  describe('handleDelete()', () => {
    it('should call taskService.deleteTask with the given id', () => {
      const fakeTaskService = TestBed.inject(TaskService) as any;
      component.handleDelete('task-1');
      expect(fakeTaskService.deleteTask).toHaveBeenCalledWith('task-1');
    });
  });
});
