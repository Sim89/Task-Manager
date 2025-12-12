import { Routes } from '@angular/router';
import {TaskManagerComponent} from '../components/task-manager-component/task-manager.component';

export const taskManagerRoutes: Routes = [
  {
    path: '', component: TaskManagerComponent,
  children: [
    {
      path: '',
      redirectTo: 'task-list',
      pathMatch: 'full'
    },
  {
    path: 'task-list',
    loadComponent: () => import ('../pages/task-list-page/task-list-page.component').then(m => m.TaskListPageComponent)
  },
  {
    path: 'task-item',
    loadComponent: () => import ('../components/task-item/task-item.component').then(m => m.TaskItemComponent)
  },
    ]
}
];
