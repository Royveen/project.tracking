import { Directive, ElementRef, OnInit, AfterContentInit, Input, NgZone, HostListener, Output, EventEmitter } from '@angular/core';
import { IDate } from '../interfaces'
import { NgModel } from '@angular/forms'
declare var $: any
@Directive({
  selector: '[datepicker]'
})
export class DatePickerDirective implements AfterContentInit, OnInit {

  @Input('ngModel') setDate: IDate;

  @Output() ngModelChange: EventEmitter<any> = new EventEmitter(false);
  private el: HTMLElement;

  constructor(el: ElementRef, public zone: NgZone, public model: NgModel) {
    this.el = el.nativeElement;
  }

  ngOnInit() {
    console.log("1");
    $(this.el).datepicker({ autoclose: true, format: 'mm/dd/yyyy' }).datepicker('setDate', new Date(this.setDate)).on('change', (e: any) => {
      let targetDate = new Date(e.target.value);
      console.log('change');
      let sendDate: IDate = {
        date: { year: targetDate.getFullYear(), month: targetDate.getMonth() + 1, day: targetDate.getDate() },
        jsdate: targetDate,
        formatted: e.target.value,
        epoc: targetDate.getTime()
      };
      this.zone.run(() => {
        this.ngModelChange.emit(sendDate);
      })
    });
  }

  ngAfterContentInit() {
    //$(this.el).datepicker('setDate', new Date(this.setDate.formatted))
  }
}
