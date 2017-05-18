import {Component,OnInit,OnDestroy} from '@angular/core'
import { Router, ActivatedRoute, Params , CanDeactivate} from '@angular/router';
import {DataService} from '../core/services/data.service'
import {DialogService} from '../core/services/dialog.service'
import {ITasks} from '../shared/interfaces'
declare var swal:any;
@Component({
    moduleId:module.id,
    selector:'task4-container',
    templateUrl:'task.4.component.html'
})

export class Task4Component implements OnInit,OnDestroy{

   task_info:Array<ITasks>=[];
   subs:any;
   task_edit:ITasks = {  
       phase: '',
        task_des: '',
        planned_start_date: {},
        planned_end_date: {},
        actual_start: {},
        actual_end: {},
        BAC: null,
        release: '',
        ATD: null,
        PV: null,
        EV: null,
        EAC: null,
        ETC: null,
        AC: null,
        task_planned: null,
        review_planned: null,
        rework_planned: null,
        SPE: null,
        PME: null,
        conf_management: null,
        QA: null,
        defect_prevention: null,
        training: null,
        defects_received: null,
        defects_delivered: null
    };
constructor(private route:ActivatedRoute,private service:DataService,private dialog:DialogService){

   this.subs=this.route.parent.params.subscribe((params: Params) => {
        let id = params['id'];
        console.log(id);
        this.service.getTasks(id)
            .subscribe((tasks:any) =>{this.task_info = tasks;console.log(this.task_info)},
      (error:any)=>{
        swal('error',"The Request encountered an error, please try again after some time","error");
         this.service.loader=false;
    });

      });
}

selectedRow:number=0;

onSubmit(){
    this.dialog.confirm('Are you sure?',() =>{
        this.service.loader=true;
    this.service.updateTask(this.task_edit).subscribe((res:any)=>{
        this.dialog.success(res);
        this.task_info.splice(this.selectedRow,1,this.task_edit);
        this.service.loader=false;
    },(error:any)=>{

    });
    });
}

editTask(n:number){
    this.selectedRow=n;
    this.task_edit=Object.assign({},this.task_info[n]);
}
ngOnInit(){

}

ngOnDestroy(){
    console.log('Destroying');
    this.subs.unsubscribe();
}
}