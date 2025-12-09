import {Injectable, signal} from '@angular/core';
import {Task} from '../models/task-model';

@Injectable({
  providedIn: 'root',
})

export class TaskService {
  private readonly localStorageKey = 'task-items';
  private readonly _tasks = signal<Task[]>(this.getTasks());
  public readonly tasks= this._tasks.asReadonly();

  private getTasks(): Task[] {
    const tasks = localStorage.getItem(this.localStorageKey);
    return tasks ? JSON.parse(tasks) : [];
  }

  private saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }

  public addTask(task: Task): void {
    const currentTasks = [...this._tasks(), task];
    this._tasks.set(currentTasks);
    this.saveTasks(currentTasks);
  }

  public updateTask(updatedTask: Task): void {
    const updatedNewTask = this._tasks().map(task => task.id === updatedTask.id ? updatedTask : task);
    this._tasks.set(updatedNewTask);
    this.saveTasks(updatedNewTask);
  }

  public deleteTask(id: number): void {
    const deletedTaskUpdated = this._tasks().filter(task => task.id !== id);
    this._tasks.set(deletedTaskUpdated);
    this.saveTasks(deletedTaskUpdated);
  }

  public getTaskById(id: number): Task | undefined {
    return this._tasks().find(task => task.id === id);
  }
}
