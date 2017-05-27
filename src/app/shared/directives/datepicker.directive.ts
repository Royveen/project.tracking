import { Directive, ElementRef, OnInit, AfterViewChecked, Input, NgZone, HostListener, Output, EventEmitter } from '@angular/core';
import { IDate } from '../interfaces'
import { NgModel } from '@angular/forms'
declare var $: any
@Directive({
  selector: '[datepicker]'
})
export class DatePickerDirective implements AfterViewChecked {

  @Input('ngModel') setDate: IDate;

  @Output() ngModelChange: EventEmitter<any> = new EventEmitter(false);
  private el: HTMLElement;

  constructor(el: ElementRef, public zone: NgZone, public model: NgModel) {
    this.el = el.nativeElement;
  }

  ngAfterViewChecked() {

    $(this.el).datepicker({ autoclose: true, setDate: this.setDate.formatted }).datepicker('setDate', this.setDate.formatted).on('change', (e: any) => {
      let targetDate = new Date(e.target.value);
      this.setDate.date = { year: targetDate.getFullYear(), month: targetDate.getMonth() + 1, day: targetDate.getDate() };
      this.setDate.jsdate = targetDate;
      this.setDate.formatted = e.target.value;
      this.setDate.epoc = targetDate.getTime();
      this.zone.run(() => {
        this.ngModelChange.emit(this.setDate);
      })
    });
  }
}
