import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule }   from '../shared/shared.module';
import { DataService } from '../core/services/data.service';
import {taskRouting} from './task.routing'
import {TaskFactory} from './task.factory'
import {TaskSumResolver} from './tasks.sums.resolve'
import { CanDeactivateFormGuard } from './can-deactivate.guard';
@NgModule({
  imports:      [ CommonModule, taskRouting.routes, SharedModule],
  declarations: [ taskRouting.components ],
  providers:[TaskFactory,TaskSumResolver]
})
export class TaskModule { 
   
}