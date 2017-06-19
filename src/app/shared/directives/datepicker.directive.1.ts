import { Component, forwardRef, ElementRef, Input, NgZone, HostListener, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'
import { IDate } from '../interfaces'
declare var $: any
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePickerComponent),
  multi: true
};
@Component({
  selector: 'datepicker',
  template: '<div class="{{group_class}} date"><input type="text"  id="{{ngId}}"  class="form-control {{inputclass}}"  name="{{ngName}}"/><span class="input-group-addon" [hidden]="!!showicon"><span [hidden]="showicon" class="fa fa-calendar"></span></span></div>',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class DatePickerComponent implements ControlValueAccessor {
  @Input('class') inputclass: string
  @Input('id') ngId: string;
  @Input('ngModel') setDate: IDate;
  @Input('name') ngName: string
  @Input('showicon') showicon: boolean
  group_class: string = "input-group";
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter(false);
  private el: HTMLElement;
  constructor(el: ElementRef, public zone: NgZone) {
    this.el = el.nativeElement;
  }

  ngOnInit() {
    if (!!this.showicon) {
      this.group_class = "";
    }
    console.log(!!this.showicon);
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

  //From ControlValueAccessor interface
  writeValue(value: any) {
    console.log(value);
    
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    console.log("1:change");
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    
  }
}
