import { Routes, RouterModule } from '@angular/router';
import { ResourcesComponent } from './resources.component';
import { IRouting } from '../shared/interfaces';
import {TaskComponent} from './task.component'
import { CanDeactivateFormGuard } from './can-deactivate.guard'

export var taskRoutes: Routes = [
  { path: 'tasks/:id', component: TaskComponent,children:[
    ]
    }
  ];

export const taskRouting: IRouting = {
  routes: RouterModule.forChild(taskRoutes),
  components:[TaskComponent]
}