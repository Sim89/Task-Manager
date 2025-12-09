import {Component, inject, Signal} from '@angular/core';
import {Task} from '../../models/task-model';
import {TaskItemComponent} from '../task-item/task-item.component';
import {TaskService} from '../../services/task-service';

@Component({
  selector: 'app-task-list',
  imports: [TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  private readonly _taskService = inject(TaskService);
  public tasks: Signal<Task[]> = this._taskService.tasks;

  onUpdateTask(task: Task): void {
    this._taskService.updateTask(task);
  }

  onDeleteTask(id: number): void {
    this._taskService.deleteTask(id);
  }

  onCompleteTask(id: number): void {
    const completedTask = this._taskService.getTaskById(id);
    if(completedTask) {
      this._taskService.updateTask({...completedTask, completed: true});
    }
  }
}
