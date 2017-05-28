import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { addReleaseRouting } from './add.release.routing';
@NgModule({
  imports: [CommonModule, addReleaseRouting.routes, SharedModule],
  declarations: [addReleaseRouting.components]
})
export class AddReleaseModule {
}