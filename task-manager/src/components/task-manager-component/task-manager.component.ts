import {Component, computed, inject, signal} from '@angular/core';
import {TaskService} from '../../services/task-service';
import {Task} from '../../models/task-model';

@Component({
  selector: 'task-manager',
  imports: [],
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

public addNewTask(): void {
  const newTask = { ...this.currentTask() };

  this._taskService.addTask(newTask);
  this.resetCurrentTask();
}

public updateTask(): void {
  const updateTask = { ...this.currentTask() };
 this._taskService.updateTask(updateTask);
 this.resetCurrentTask();
}

public deleteTask(id: number): void {
this._taskService.deleteTask(id);
}

}
