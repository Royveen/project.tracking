import { Routes, RouterModule } from '@angular/router';
import { AddReleaseComponent } from './add.release.component';
import { IRouting } from '../shared/interfaces';
export var AddReleaseRoutes: Routes = [
  { path: 'new', component: AddReleaseComponent}
];

export const addReleaseRouting: IRouting = {
  routes: RouterModule.forChild(AddReleaseRoutes),
  components:[AddReleaseComponent]
}