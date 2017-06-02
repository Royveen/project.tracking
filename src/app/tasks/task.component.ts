import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute ,NavigationEnd,Params } from '@angular/router';
import {Location} from '@angular/common'
import {DataService} from '../core/services/data.service'
import {TaskFactory} from './task.factory'
import 'rxjs/add/operator/filter';
@Component({ 
  moduleId: module.id,
  selector: 'task-info',
  templateUrl: 'task.component.html'
})
export class TaskComponent implements OnInit {
    previousUrl=this.service.prevUrl;
    title='';
    constructor(private route: ActivatedRoute, private service:DataService,public task_factory:TaskFactory,private location:Location) {

        this.service.getRelease(this.task_factory.releaseID).subscribe((res:any)=>{
          console.log(res);
          this.title=res.relName;
        })
       
     }

    ngOnInit() {

     
    }

}


