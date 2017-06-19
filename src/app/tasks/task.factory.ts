import {Injectable,} from '@angular/core'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import { Router, ActivatedRouteSnapshot,Resolve, Params,RouterStateSnapshot } from '@angular/router';
import { DataService } from '../core/services/data.service'
import { DialogService } from '../core/services/dialog.service'
import { ITasks } from '../shared/interfaces'
declare var swal:any
@Injectable()
export class TaskFactory implements Resolve<ITasks[]> {
   releaseID:string;
   task_info:Array<ITasks>
   task_edit:Array<ITasks>
    constructor(private service:DataService,private router: Router,private dialog:DialogService){

    }


    resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
      this.service.loader=true;
       this.releaseID = route.params['id'];
       console.log('resolving');
    return this.service.getTasks(this.releaseID);
  }
//  resolve(route: ActivatedRouteSnapshot){
//      this.releaseID = route.params['id'];
//         this.service.getTasks(this.releaseID)
//                 .subscribe((tasks: any) => {
//                     this.task_info=tasks;
//                     this.task_edit=this.service.getCopy(this.task_info);

//                     this.task_info.map(function(n){
//                         n.showinput=false;
//                     })
//                 },
//                 (error: any) => {
//                     swal('error', "The Request encountered an error, please try again after some time", "error");
//                     this.service.loader = false;
//                 })
//  }

 onSubmit(n: number) {
        this.dialog.confirm('Are you sure?', () => {
            this.service.loader = true;
            if(this.task_edit[n]["_id"]){
            this.service.updateTask(this.task_edit[n]).subscribe((res: any) => {
                this.task_info[n] = this.service.getCopy(this.task_edit[n])
                this.task_edit[n].showinput = false;
                this.dialog.success(res);
                this.service.loader = false;
            }, (error: any) => {

            });
            }else {
                this.service.addTasks(this.task_edit[n]).subscribe((res: any) => {
                this.task_info[n] = this.service.getCopy(this.task_edit[n])
                this.task_edit[n].showinput = false;
                this.dialog.success(res);
                this.service.loader = false;
            }, (error: any) => {

            }); 
            }
        });
    }


    editTask(n: number) {
        this.task_edit[n] = this.service.getCopy(this.task_info[n])
        this.task_edit[n].showinput = true;
    }
    closeEditTask(n: number) {
        this.task_edit[n].showinput = false;
    }

    valueATD = function (v: any): number {
        return v.SPE + v.PME + v.conf_management + v.QA + v.defect_prevention + v.training;
    }

    valueSPE = function (v: any): number {
        return v.task_planned + v.review_planned + v.rework_planned;
    }

}