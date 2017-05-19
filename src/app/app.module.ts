import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { loaderComponent } from './loader.component';
import { NavbarComponent } from './navbar/navbar.component';
import {KnowledgeComponent} from './knowledge.component'
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { AddReleaseModule } from './addRelease/add.release.module';
import { TaskModule }   from './tasks/task.module';
import { app_routing } from './app.routing';
import { CoreModule }   from './core/core.module';
import { SharedModule }   from './shared/shared.module';
// import { CNgbRootModule }   from './bootstrap_modules/bootstrap.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,   //Singleton objects
    SharedModule,
    app_routing,
    LoginModule,
    DashboardModule,
    AddReleaseModule,
    TaskModule
  ],
  declarations: [ AppComponent,NavbarComponent,loaderComponent,KnowledgeComponent],
  bootstrap:    [ AppComponent,NavbarComponent,loaderComponent],
})
export class AppModule { 
      
}