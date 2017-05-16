import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule }   from '../shared/shared.module';
import { DataService } from '../core/services/data.service';
import {taskRouting} from './task.routing'
import { CanDeactivateFormGuard } from './can-deactivate.guard';
import { MyDatePickerModule } from 'mydatepicker';
@NgModule({
  imports:      [ CommonModule, taskRouting.routes, SharedModule,MyDatePickerModule],
  declarations: [ taskRouting.components ],
  providers:[CanDeactivateFormGuard]
})
export class TaskModule { 
   
}