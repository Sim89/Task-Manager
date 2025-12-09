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
    const formValue = this.taskForm.value;
    if (this.taskForm.valid) {
      const newTask: Task = {
        id: Date.now(),
       ...formValue
      } as Task;
      this.addTask.emit(newTask);
      this.taskForm.reset();
    }
  }
}
