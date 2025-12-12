import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

// const createTask: Task = {
//   id: 0,
//   title: '',
//   description: '',
//   completed: false
// };

@Component({
  selector: 'task-manager',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.scss',
})

export class TaskManagerComponent {
// private readonly _taskService = inject(TaskService);

// public currentTask = signal<Task>({ ...createTask });
//
// public resetCurrentTask(): void {
//   this.currentTask.set( { ...createTask } );
// }
//
// public addNewTask(newTask: Task): void {
//   if (!newTask.id) {
//     newTask.id = Date.now();
//   }
//   this._taskService.addTask(newTask);
//   this.resetCurrentTask();
// }
}
