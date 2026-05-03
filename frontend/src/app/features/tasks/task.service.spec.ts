import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';
import { TaskService } from './task.service';
import { Task, TaskFormData } from './models';

const mockAssignee = { id: 'u1', name: 'John Doe', avatar: '', email: 'john@test.com' };

const makeTask = (overrides: Partial<Task> = {}): Task => ({
  _id: 'task-1',
  title: 'Test Task',
  description: 'A description',
  status: 'todo',
  priority: 'medium',
  dueDate: '2099-01-01',
  assignee: mockAssignee,
  tags: [],
  createdAt: '2024-01-01T00:00:00.000Z',
  updatedAt: '2024-01-01T00:00:00.000Z',
  ...overrides,
});

const makeFormData = (overrides: Partial<TaskFormData> = {}): TaskFormData => ({
  title: 'New Task',
  description: 'Desc',
  status: 'todo',
  priority: 'medium',
  dueDate: '2099-01-01',
  assignee: mockAssignee,
  tags: [],
  ...overrides,
});

/** Simulates a full loadTasks() call: flushes HTTP and advances fake timers past the delay. */
async function simulateLoad(service: TaskService, httpMock: HttpTestingController, tasks: Task[]) {
  const load$ = firstValueFrom(service.loadTasks());
  httpMock.expectOne('tasks.json').flush({ tasks });
  await vi.advanceTimersByTimeAsync(1001);
  await load$;
}

describe('TaskService', () => {
  let service: TaskService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(TaskService);
    httpMock = TestBed.inject(HttpTestingController);
    vi.useFakeTimers();
  });

  afterEach(() => {
    httpMock.verify();
    vi.useRealTimers();
  });

  describe('loadTasks()', () => {
    it('should start with isLoading = true', () => {
      expect(service.isLoading()).toBe(true);
    });

    it('should load tasks from tasks.json and set isLoading to false', async () => {
      const tasks = [makeTask({ _id: 'task-1' }), makeTask({ _id: 'task-2' })];

      await simulateLoad(service, httpMock, tasks);

      expect(service.tasks()).toEqual(tasks);
      expect(service.isLoading()).toBe(false);
    });

    it('should not make a second HTTP request when already loaded', async () => {
      const tasks = [makeTask()];
      await simulateLoad(service, httpMock, tasks);

      let result: Task[] = [];
      service.loadTasks().subscribe((t) => (result = t));
      httpMock.expectNone('tasks.json');
      expect(result).toEqual(tasks);
    });
  });

  describe('createTask()', () => {
    it('should prepend the new task to the tasks signal', () => {
      service.createTask(makeFormData({ title: 'First' })).subscribe();
      service.createTask(makeFormData({ title: 'Second' })).subscribe();

      expect(service.tasks()[0].title).toBe('Second');
      expect(service.tasks()[1].title).toBe('First');
    });

    it('should return the created task with a generated id', () => {
      let created: Task | undefined;
      service.createTask(makeFormData({ title: 'Created Task' })).subscribe((t) => (created = t));

      expect(created).toBeDefined();
      expect(created!.title).toBe('Created Task');
      expect(created!._id).toMatch(/^task-\d+/);
    });
  });

  describe('updateTask()', () => {
    it('should replace the matching task in the signal', () => {
      service.createTask(makeFormData({ title: 'Original' })).subscribe();
      const id = service.tasks()[0]._id;

      service.updateTask(id, makeFormData({ title: 'Updated' })).subscribe();

      expect(service.tasks().find((t) => t._id === id)?.title).toBe('Updated');
    });

    it('should return the updated task with the same id', () => {
      service.createTask(makeFormData()).subscribe();
      const id = service.tasks()[0]._id;

      let updated: Task | undefined;
      service.updateTask(id, makeFormData({ title: 'New Title' })).subscribe((t) => (updated = t));

      expect(updated?.title).toBe('New Title');
      expect(updated?._id).toBe(id);
    });

    it('should not affect other tasks', () => {
      service.createTask(makeFormData({ title: 'Other' })).subscribe();
      vi.advanceTimersByTime(1); // ensure unique Date.now()-based id
      service.createTask(makeFormData({ title: 'Target' })).subscribe();
      const [targetId] = service.tasks().map((t) => t._id);

      service.updateTask(targetId, makeFormData({ title: 'Changed' })).subscribe();

      expect(service.tasks().find((t) => t.title === 'Other')).toBeDefined();
    });
  });

  describe('deleteTask()', () => {
    it('should remove the task from the signal', () => {
      service.createTask(makeFormData({ title: 'To Delete' })).subscribe();
      const id = service.tasks()[0]._id;

      service.deleteTask(id).subscribe();

      expect(service.tasks().some((t) => t._id === id)).toBe(false);
    });

    it('should not affect other tasks', () => {
      service.createTask(makeFormData({ title: 'Stay' })).subscribe();
      vi.advanceTimersByTime(1); // ensure unique Date.now()-based id
      service.createTask(makeFormData({ title: 'Delete Me' })).subscribe();
      const deleteId = service.tasks()[0]._id;

      service.deleteTask(deleteId).subscribe();

      expect(service.tasks().length).toBe(1);
      expect(service.tasks()[0].title).toBe('Stay');
    });
  });

  describe('dropTask()', () => {
    it('should change the task status', () => {
      service.createTask(makeFormData({ title: 'Movable', status: 'todo' })).subscribe();
      const id = service.tasks()[0]._id;

      service.dropTask(id, 'in_progress', null);

      expect(service.tasks().find((t) => t._id === id)?.status).toBe('in_progress');
    });

    it('should append to the end of the target column when insertBeforeId is null', () => {
      service.createTask(makeFormData({ title: 'Anchor', status: 'done' })).subscribe();
      service.createTask(makeFormData({ title: 'Mover', status: 'todo' })).subscribe();
      const moverId = service.tasks()[0]._id;

      service.dropTask(moverId, 'done', null);

      const doneIds = service
        .tasks()
        .filter((t) => t.status === 'done')
        .map((t) => t._id);
      expect(doneIds[doneIds.length - 1]).toBe(moverId);
    });

    it('should insert the task before the anchor when insertBeforeId is provided', () => {
      service.createTask(makeFormData({ title: 'A', status: 'done' })).subscribe();
      vi.advanceTimersByTime(1); // ensure unique Date.now()-based id
      service.createTask(makeFormData({ title: 'B', status: 'done' })).subscribe();
      const [idB, idA] = service.tasks().map((t) => t._id);

      service.dropTask(idB, 'done', idA);

      const ids = service.tasks().map((t) => t._id);
      expect(ids.indexOf(idB)).toBeLessThan(ids.indexOf(idA));
    });
  });

  describe('getTaskById()', () => {
    it('should return the task by id from in-memory store', () => {
      service.createTask(makeFormData({ title: 'Find Me' })).subscribe();
      const id = service.tasks()[0]._id;

      let found: Task | undefined;
      service.getTaskById(id).subscribe((t) => (found = t));

      expect(found?.title).toBe('Find Me');
    });

    it('should load from HTTP and return undefined for a non-existent id', async () => {
      let found: Task | undefined | null = null;
      service.getTaskById('non-existent').subscribe((t) => (found = t));

      httpMock.expectOne('tasks.json').flush({ tasks: [] });
      await vi.advanceTimersByTimeAsync(1001);

      expect(found).toBeUndefined();
    });
  });
});
