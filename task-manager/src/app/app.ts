import { Component, signal } from '@angular/core';
import {TaskManagerComponent} from '../components/task-manager-component/task-manager.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
