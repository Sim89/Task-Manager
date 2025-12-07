import {Component, input, InputSignal, OnInit, output} from '@angular/core';
import {Task} from '../../models/task-model';
import { ReactiveFormsModule} from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-item',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
})
export class TaskItemComponent implements OnInit {
  public task: InputSignal<Task> = input<Task>({ id: 0, title: '', description: '', completed: false });
  public completeTask = output<number>();
  public updateTask = output<Task>();
  public deleteTask = output<number>();

  public isEditing: boolean = false;
  public editTitleControl = new FormControl('');
  public editDescriptionControl = new FormControl('');

  public ngOnInit() {
    this.editTitleControl.setValue(this.task().title);
    this.editDescriptionControl.setValue(this.task().description ?? '');
  }

  public onCompleteTask(): void {
    this.completeTask.emit(this.task().id);
  }

  public onDeleteTask(): void {
    this.deleteTask.emit(this.task().id);
  }

  public onSaveEdit(): void {
    const updatedTask: Task = {
      ...this.task(),
      title: this.editTitleControl.value ?? '',
      description: this.editDescriptionControl.value ?? ''
    };
    this.updateTask.emit(updatedTask);
    this.isEditing = false;
  }
}
