export type TaskStatus = 'todo' | 'in_progress' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high';

export interface TaskUser {
  _id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface Task {
  _id: string;
  referenceId: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  assignee: TaskUser | null | undefined;
  reporter: TaskUser | null | undefined;
  tags: string[] | null | undefined;
  createdAt: string;
  updatedAt: string;
}

export interface TaskFormData {
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  assignee: string;
  reporter: string;
  tags: string[];
}
