import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tasks',
    loadChildren: () => import('../app/task-manager.routes').then(m => m.taskManagerRoutes)
  }
];
