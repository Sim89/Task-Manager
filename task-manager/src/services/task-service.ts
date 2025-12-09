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

  // public updateTask(updatedTask: Task): void {
  //   const updatedNewTask = this._tasks().map(task => task.id === updatedTask.id ? updatedTask : task);
  //   this._tasks.set(updatedNewTask);
  //   this.saveTasks(updatedNewTask);
  // }

  public updateTask(updatedTask: Task): void {
    const updatedNewTask = this._tasks().map(t => ({ ...t }));
    updatedNewTask.forEach(task => {
      if(task.id === updatedTask.id) Object.assign(task, updatedTask);
    });
    this._tasks.set(updatedNewTask);
    this.saveTasks(updatedNewTask);
  }
/* deleting a task using filter */
  // public deleteTask(id: number): void {
  //   const deletedTaskUpdated = this._tasks().filter(task => task.id !== id);
  //   this._tasks.set(deletedTaskUpdated);
  //   this.saveTasks(deletedTaskUpdated);
  // }

  /* deleting a task using Splice */
  // public deleteTask(id: number): void {
  //   const deletedTaskUpdated = this._tasks().map(task => ({ ...task }));
  //   const index = deletedTaskUpdated.findIndex(task => task.id === id);
  //   if(index === -1) return;
  //   deletedTaskUpdated.splice(index, 1);
  //   this._tasks.set(deletedTaskUpdated);
  //   this.saveTasks(deletedTaskUpdated);
  // }
/* deleting a task using reduce */
  public deleteTask(id: number): void {
    const deletedTaskUpdated = this._tasks().reduce<Task[]>((acc, task) => {
      if(task.id !== id) acc.push({ ...task});
      return acc;
    }, []);
    this._tasks.set(deletedTaskUpdated);
    this.saveTasks(deletedTaskUpdated);
  }

  public getTaskById(id: number): Task | undefined {
    // return this._tasks().find(task => task.id === id);
  const tasks = this._tasks();
  const index = tasks.findIndex((task) => task.id === id);
  return index !== -1 ? { ...tasks[index] } : undefined;
  }
}
