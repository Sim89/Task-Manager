import {Component, output} from '@angular/core';
import { Task } from '../../models/task-model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
  imports: [
    ReactiveFormsModule
  ]
})
export class TaskFormComponent {
  public addTask = output<Task>();

  public taskForm = new FormGroup({
    title: new FormControl('',
      { nonNullable: true }),
    description: new FormControl('', { nonNullable: true }),
    completed: new FormControl(false)
  });

  onSubmit(): void {
    if (this.taskForm.valid) {
      const newTask: Task = {
        id: Date.now(),
        title: this.taskForm.controls.title.value ?? '',
        description: this.taskForm.controls.description.value ?? '',
        completed: !!this.taskForm.controls.completed.value
      };
      this.addTask.emit(newTask);
      this.taskForm.reset({ title: '', description: '', completed: false });
    }
  }
}
