import {Injectable} from '@angular/core'
import { Router, ActivatedRoute, Params, CanDeactivate } from '@angular/router';
import { DataService } from '../core/services/data.service'
import { DialogService } from '../core/services/dialog.service'
import { ITasks } from '../shared/interfaces'
declare var swal:any
@Injectable()
export class TaskFactory {
    allTasks:Array<ITasks>;
    constructor(private service:DataService,private route:ActivatedRoute){

    }

    setAllTasks(){
              
        return new Promise(resolve=>{
          this.route.parent.params.subscribe((params: Params) => {
            let id = params['id'];
            console.log(id);
            this.service.getTasks(id)
                .subscribe((tasks: any) => {
                        this.allTasks=tasks;
                        resolve(tasks);
                    });
                },
                (error: any) => {
                    swal('error', "The Request encountered an error, please try again after some time", "error");
                    this.service.loader = false;
                });
         })
      
                
    }
}