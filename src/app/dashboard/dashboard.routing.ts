import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { IRouting } from '../shared/interfaces';
var routes: Routes = [
  {path: 'dashboard', component: DashboardComponent}
];

export const dashboardRouting: IRouting = {
  routes: RouterModule.forChild(routes),
  components:[DashboardComponent]
}