import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule }   from '../shared/shared.module';
import { DataService } from '../core/services/data.service';
import { dashboardRouting } from './dashboard.routing';
@NgModule({
  imports:      [ CommonModule, dashboardRouting.routes, SharedModule ],
  declarations: [ dashboardRouting.components ]
})
export class DashboardModule { 
   
}