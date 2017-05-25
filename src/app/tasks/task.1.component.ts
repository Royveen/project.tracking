import {Component,OnInit,OnDestroy} from '@angular/core'
import { Router, ActivatedRoute, Params , CanDeactivate} from '@angular/router';
import {DataService} from '../core/services/data.service'
import {DialogService} from '../core/services/dialog.service'
import {ITasks} from '../shared/interfaces'
declare var swal:any;
declare var _:any;
@Component({
    moduleId:module.id,
    selector:'task1-container',
    templateUrl:'task.1.component.html'
})

export class Task1Component implements OnInit,OnDestroy{

   task_info:Array<ITasks>=[];
   subs:any;
   task_edit:Array<any>
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
selectedRow:number=0;

onSubmit(n:number){

    
    this.dialog.confirm('Are you sure?',() =>{
        this.service.loader=true;
    this.service.updateTask(this.task_edit).subscribe((res:any)=>{
        this.dialog.success(res);
        this.service.loader=false;
    },(error:any)=>{

    });
    });
}


editTask(n:number){
    this.task_edit[n].showinput=true;
}
closeEditTask(n:number){
    this.task_edit[n].showinput=false;
}



ngOnInit(){

    
}

ngOnDestroy(){
    console.log('Destroying');
    this.subs.unsubscribe();
}
}