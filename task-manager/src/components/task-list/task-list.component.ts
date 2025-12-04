import {Component, input, InputSignal, output} from '@angular/core';
import {Task} from '../../models/task-model';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
public tasks: InputSignal<Array<Task>> = input<Array<Task>>([]);
public addNewTask = output<Task>();
public updateTask = output<Task>();
public deleteTask = output<number>();

onAddTask(task: Task):void {
  this.addNewTask.emit(task);
}

onUpdateTask(task: Task): void {
  this.updateTask.emit(task);
}

onDeleteTask(id: number): void {
  this.deleteTask.emit(id);
}

}
