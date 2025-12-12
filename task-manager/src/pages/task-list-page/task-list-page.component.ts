import {Component, inject} from '@angular/core';
import {TaskListComponent} from '../../components/task-list/task-list.component';
import {TaskFormComponent} from '../../components/task-form/task-form.component';
import {TaskService} from '../../services/task-service';
import {Task} from '../../models/task-model';

@Component({
  selector: 'app-task-list-page',
  imports: [TaskListComponent, TaskFormComponent],
  templateUrl: './task-list-page.component.html',
  styleUrl: './task-list-page.component.scss',
  standalone: true,
})
export class TaskListPageComponent {
  private taskService = inject(TaskService);

  public addNewTask(newTask: Task): void {
    this.taskService.addTask(newTask);
  }
}
