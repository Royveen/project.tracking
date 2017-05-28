import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { SortByDirective } from './directives/sortby.directive';
import { DatePickerDirective } from './directives/datepicker.directive';
import { DatePickerComponent } from './directives/datepicker.directive.1';
@NgModule({
  imports: [CommonModule],
  declarations: [CapitalizePipe, TrimPipe, SortByDirective,DatePickerDirective,DatePickerComponent],
  exports: [CapitalizePipe, TrimPipe, SortByDirective,
    CommonModule, FormsModule, HttpModule,DatePickerDirective,DatePickerComponent],
  // providers: [] // these would be multi-instance
})
export class SharedModule { }
