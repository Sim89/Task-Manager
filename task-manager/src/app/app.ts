import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TaskManagerComponent} from '../components/task-manager-component/task-manager.component';
import {TaskListComponent} from '../components/task-list/task-list.component';
import {TaskService} from '../services/task-service';
import {TaskItemComponent} from '../components/task-item/task-item.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskManagerComponent, TaskListComponent, TaskItemComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('task-manager');
}
