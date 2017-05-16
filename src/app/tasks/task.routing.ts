import { Routes, RouterModule } from '@angular/router';
import { IRouting } from '../shared/interfaces';
import {TaskComponent} from './task.component'
import {Task1Component} from './task.1.component'
import {Task2Component} from './task.2.component'
import {Task3Component} from './task.3.component'
import {Task4Component} from './task.4.component'
import { CanDeactivateFormGuard } from './can-deactivate.guard'

export var taskRoutes: Routes = [
  { path: 'tasks/:id', component: TaskComponent,children:[
    { path:'1',component:Task1Component},
    { path:'2',component:Task2Component},
    { path:'3',component:Task3Component},
    { path:'4',component:Task4Component},
  ]}
  ];

export const taskRouting: IRouting = {
  routes: RouterModule.forChild(taskRoutes),
  components:[TaskComponent,Task1Component,Task2Component,Task3Component,Task4Component]
}