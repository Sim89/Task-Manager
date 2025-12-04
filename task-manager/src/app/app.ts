import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TaskManagerComponent} from '../components/task-manager-component/task-manager.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskManagerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('task-manager');
}
