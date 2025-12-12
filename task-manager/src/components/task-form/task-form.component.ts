import {Component, inject, output} from '@angular/core';
import { Task } from '../../models/task-model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
  imports: [
    ReactiveFormsModule
  ]
})
export class TaskFormComponent {
  private router = inject(Router);
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
      this.router.navigate(['/tasks/task-list']).then(success => {
        if(success) {
          console.log('Navigation to task list successful');
        }
      }).catch(error => {
        console.error('Navigation to task list failed', error);
      })
    }
  }
}
