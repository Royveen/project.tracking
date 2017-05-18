import {Component,OnInit,OnDestroy} from '@angular/core'
import { Router, ActivatedRoute, Params , CanDeactivate} from '@angular/router';
import {DataService} from '../core/services/data.service'
import {DialogService} from '../core/services/dialog.service'
declare var swal:any;
@Component({
    moduleId:module.id,
    selector:'task3-container',
    templateUrl:'task.3.component.html'
})

export class Task3Component implements OnInit,OnDestroy{

   task_info:any=[];
   subs:any;
   task_edit:any={};
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