import { Routes, RouterModule } from '@angular/router';
import { IRouting } from '../shared/interfaces';
import {TaskComponent} from './task.component'
import {Task1Component} from './task.1.component'
import { CanDeactivateFormGuard } from './can-deactivate.guard'

export var taskRoutes: Routes = [
  { path: 'tasks/:id', component: TaskComponent,children:[
    { path:'1',component:Task1Component}
  ]}
  ];

export const taskRouting: IRouting = {
  routes: RouterModule.forChild(taskRoutes),
  components:[TaskComponent,Task1Component]
}