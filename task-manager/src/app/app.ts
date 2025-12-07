import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TaskManagerComponent} from '../components/task-manager-component/task-manager.component';
import {TaskListComponent} from '../components/task-list/task-list.component';
import {TaskService} from '../services/task-service';
import {TaskItemComponent} from '../components/task-item/task-item.component';
import {TaskFormComponent} from '../components/task-form/task-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskManagerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('task-manager');
}
