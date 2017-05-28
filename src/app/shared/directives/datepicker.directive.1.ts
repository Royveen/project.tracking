 import { Component, ElementRef, Input, NgZone,HostListener,Output,EventEmitter,ChangeDetectorRef } from '@angular/core';
 import {IDate} from '../interfaces'
declare var $:any
@Component({
  selector: 'datepicker',
  template: '<div class="datepicker"><div class="input-group date " data-date-format="mm/dd/yyyy"><input type="text"  id="{{ngId}}"  class="{{inputclass}}" name="{{ngName}}"/><span class="input-group-addon" [hidden]="showicon"><span [hidden]="showicon" class="glyphicon glyphicon-calendar"></span></span></div></div>',
})
export class DatePickerComponent {
  @Input('class') inputclass:string
  @Input('id') ngId:string;    
  @Input('ngModel') setDate: IDate;
  @Input('name') ngName:string
  @Input('showicon') showicon:string
@Output() ngModelChange: EventEmitter<any> = new EventEmitter(false);
  private el: HTMLElement;
  constructor(el: ElementRef, public zone: NgZone,public chref:ChangeDetectorRef ) {
    this.el = el.nativeElement;
  }

  ngOnInit() {
    console.log(this.setDate);
    $(this.el).find('.date').datepicker('setDate',new Date(this.setDate.formatted)).datepicker({autoclose:true}).on('change', (e:any) => {
        let targetDate=new Date(e.target.value);
            this.setDate.date={year:targetDate.getFullYear(),month:targetDate.getMonth()+1,day:targetDate.getDate()};
            this.setDate.jsdate=targetDate;
            this.setDate.formatted=e.target.value;
            this.setDate.epoc=targetDate.getTime();
        this.zone.run(()=>{
       this.ngModelChange.emit(this.setDate);})});

    // Or if you're not doing anything else in the onSelect callback
    // $(this.el).datepicker({
    //   onSelect: this.doEmitDate.bind(this)
    // });
  }
}
