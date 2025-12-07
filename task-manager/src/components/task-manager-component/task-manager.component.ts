import {Component, computed, inject, signal} from '@angular/core';
import {TaskService} from '../../services/task-service';
import {Task} from '../../models/task-model';
import {TaskListComponent} from '../task-list/task-list.component';
import {TaskFormComponent} from '../task-form/task-form.component';

@Component({
  selector: 'task-manager',
  imports: [
    TaskListComponent,
    TaskFormComponent
  ],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.scss',
})
export class TaskManagerComponent {
private readonly _taskService = inject(TaskService);

public readonly tasks = computed(() => this._taskService.tasks());

public readonly defaultTask = signal<Task>({
  id: 0,
  title: '',
  description: '',
  completed: false
});

public currentTask = signal<Task>(this.defaultTask());

public resetCurrentTask(): void {
  this.currentTask.set(this.defaultTask());
}

public addNewTask(newTask: Task): void {
  if (!newTask.id) {
    newTask.id = Date.now();
  }
  this._taskService.addTask(newTask);
  this.resetCurrentTask();
}

public updateTask(updateTask: Task): void {
 this._taskService.updateTask(updateTask);
 this.resetCurrentTask();
}

public deleteTask(id: number): void {
this._taskService.deleteTask(id);
}

public completeTask(id: number): void {
  const task = this._taskService.getTaskById(id);
  if (task) {
    this._taskService.updateTask({...task, completed: true});
  }
}
}
