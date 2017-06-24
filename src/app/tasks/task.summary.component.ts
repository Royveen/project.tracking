import {Component,OnInit,OnDestroy} from '@angular/core'
import { Router, ActivatedRoute, Params , CanDeactivate} from '@angular/router';
import {DataService} from '../core/services/data.service'
import {DialogService} from '../core/services/dialog.service'
import {TaskFactory} from './task.factory'
import {ITasks} from '../shared/interfaces'
import {ISum} from '../shared/interfaces'
declare var swal:any;
@Component({
    moduleId:module.id,
    selector:'tasksSummary-container',
    templateUrl:'task.summary.component.html'
})

export class TaskSummaryComponent implements OnInit,OnDestroy{

  sums:ISum={
      
    "totals_atd": 0,
    "totals_BAC": 0,
    "totals_PV": 0,
    "totals_EV": 0,
    "totals_EAC": 0,
    "totals_ETC": 0,
    "totals_AC": 0,
    "totals_task_planned": 0,
    "totals_review_planned": 0,
    "totals_rework_planned": 0,
    "totals_SPE": 0,
    "totals_PME": 0,
    "totals_conf_management": 0,
    "totals_QA": 0,
    "totals_defect_prevention": 0,
    "totals_training": 0,
    "totals_defects_received": 0,
    "totals_defects_delivered": 0

};
constructor(private route:ActivatedRoute,private service:DataService,private dialog:DialogService,private task_factory:TaskFactory){
    
}


calCPI(){
   
    return this.task_factory.sums.totals_atd / this.task_factory.sums.totals_BAC
}


calSPI(){
     return this.task_factory.sums.totals_BAC / this.task_factory.sums.totals_atd
}


ngOnInit(){
    
}

ngOnDestroy(){
    console.log('Destroying');
}
}