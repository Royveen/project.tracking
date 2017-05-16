import { Routes, RouterModule } from '@angular/router';
import { NavbarModule } from './navbar.module';
import { NavbarComponent } from './navbar.component';
import { IRouting } from '../shared/interfaces';

var routes: Routes = [
  {
        path: 'main',
        component: NavbarComponent
  }
]

export const navbarRouting: IRouting = {
  routes: RouterModule.forChild(routes),
  components:[NavbarComponent]
}