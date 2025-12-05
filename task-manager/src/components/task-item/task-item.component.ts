import {Component, input, InputSignal, output} from '@angular/core';
import {Task} from '../../models/task-model';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
})
export class TaskItemComponent {
  public task: InputSignal<Task> = input<Task>({ id: 0, title: '', description: '', completed: false });
  public completeTask = output<number>();
  public updateTask = output<Task>();
  public deleteTask = output<number>();

  public onCompleteTask(): void {
    this.completeTask.emit(this.task().id);
  }

  public onUpdateTask(): void {
    this.updateTask.emit(this.task());
  }

  public onDeleteTask(): void {
    this.deleteTask.emit(this.task().id);
  }
}
