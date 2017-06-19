import {Component,OnInit,OnDestroy} from '@angular/core'
import { Router, ActivatedRoute, Params , CanDeactivate} from '@angular/router';
import {DataService} from '../core/services/data.service'
import {DialogService} from '../core/services/dialog.service'
import {ITasks} from '../shared/interfaces'
declare var swal:any;
@Component({
    moduleId:module.id,
    selector:'tasksSummary-container',
    templateUrl:'task.summary.component.html'
})

export class TaskSummaryComponent implements OnInit,OnDestroy{

   task_info:any=[];
   subs:any;
   task_edit:any = {};
constructor(private route:ActivatedRoute,private service:DataService,private dialog:DialogService){
  
}
selectedRow:number=0;





ngOnInit(){}

ngOnDestroy(){
    console.log('Destroying');
}
}