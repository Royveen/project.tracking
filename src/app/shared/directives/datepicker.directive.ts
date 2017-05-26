 import { Directive, ElementRef, Input, NgZone,HostListener,Output,EventEmitter,ChangeDetectorRef } from '@angular/core';
declare var $:any
@Directive({
  selector: '[datepicker]',
})
export class DatePickerDirective {
      
  @Input('ngModel') setDate: string;
@Output() ngModelChange: EventEmitter<any> = new EventEmitter(false);
  private el: HTMLElement;

  constructor(el: ElementRef, public zone: NgZone,public chref:ChangeDetectorRef ) {
    this.el = el.nativeElement;
  }



  ngOnInit() {
    $(this.el).datepicker({autoclose:true}).on('change', (e:any) => {
        // let targetDate=new Date(e.target.value);
        // let dateObject={
        //     date:{year:targetDate.getFullYear(),month:targetDate.getMonth()+1,day:targetDate.getUTCDay()},
        //     jsdate:new Date(e.target.value),
        //     formatted:e.target.value
        // }
        this.zone.run(()=>{
       this.ngModelChange.emit(e.target.value);})});

    // Or if you're not doing anything else in the onSelect callback
    // $(this.el).datepicker({
    //   onSelect: this.doEmitDate.bind(this)
    // });
  }
}
