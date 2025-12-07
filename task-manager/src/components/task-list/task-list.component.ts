import {Component, input, InputSignal, output} from '@angular/core';
import {Task} from '../../models/task-model';
import {TaskItemComponent} from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  imports: [TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
public tasks: InputSignal<Array<Task>> = input<Array<Task>>([]);
public updateTask = output<Task>();
public deleteTask = output<number>();
public completeTask = output<number>();

onUpdateTask(task: Task): void {
  this.updateTask.emit(task);
}

onDeleteTask(id: number): void {
  this.deleteTask.emit(id);
}

onCompleteTask(id: number): void {
  this.completeTask.emit(id);
}

}
