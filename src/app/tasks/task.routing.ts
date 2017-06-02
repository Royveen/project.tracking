import { Routes, RouterModule } from '@angular/router';
import { IRouting } from '../shared/interfaces';
import { TaskComponent } from './task.component'
import { Task1Component } from './task.1.component'
import { Task3Component } from './task.3.component'
import { Task4Component } from './task.4.component'
import { TaskSummaryComponent } from './task.summary.component'
import { CanDeactivateFormGuard } from './can-deactivate.guard'
import {TaskFactory} from './task.factory'
export var taskRoutes: Routes = [
  {
    path: 'tasks/:id', component: TaskComponent, children: [
      { path: 'summary', component: TaskSummaryComponent },
      { path: '1', component: Task1Component },
      { path: '2', component: Task3Component },
      { path: '3', component: Task4Component },
    ],
    resolve:{tasks:TaskFactory}
  }
];

export const taskRouting: IRouting = {
  routes: RouterModule.forChild(taskRoutes),
  components: [TaskComponent, Task1Component, Task3Component, Task4Component, TaskSummaryComponent]
}