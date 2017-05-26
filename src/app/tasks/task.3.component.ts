import {Component,OnInit,OnDestroy} from '@angular/core'
import { Router, ActivatedRoute, Params , CanDeactivate} from '@angular/router';
import {DataService} from '../core/services/data.service'
import {DialogService} from '../core/services/dialog.service'
import {ITasks} from '../shared/interfaces'

declare var swal:any;
@Component({
    moduleId:module.id,
    selector:'task3-container',
    templateUrl:'task.3.component.html'
})

export class Task3Component {

   task_info:Array<ITasks>=[];
   subs:any;
   task_edit:Array<any>;

constructor(private route:ActivatedRoute,private service:DataService,private dialog:DialogService){
   this.subs=this.route.parent.params.subscribe((params: Params) => {
        let id = params['id'];
        console.log(id);
        var one={};
        this.service.getTasks(id)
            .subscribe((tasks:any) =>{this.task_info = tasks;
               this.task_edit =JSON.parse(JSON.stringify(this.task_info));
                
                this.task_edit.map(function(n:any){
                    n.showinput=false;
                });
            },
      (error:any)=>{
        swal('error',"The Request encountered an error, please try again after some time","error");
         this.service.loader=false;
    });

      });
}
onSubmit(n:number){

    
    this.dialog.confirm('Are you sure?',() =>{
        this.service.loader=true;
    this.service.updateTask(this.task_edit[n]).subscribe((res:any)=>{
         this.task_info[n]=this.service.getCopy(this.task_edit[n])
         this.task_edit[n].showinput=false;
        this.dialog.success(res);
        this.service.loader=false;
    },(error:any)=>{

    });
    });
}
editTask(n:number){
    this.task_edit[n]=this.service.getCopy(this.task_info[n])
    this.task_edit[n].showinput=true;
}
closeEditTask(n:number){
    this.task_edit[n].showinput=false;
}

}