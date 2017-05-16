import {Component,Input,Output,EventEmitter,OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { DataService } from '../core/services/data.service';
import {Response} from '@angular/http';
@Component({ 
  moduleId: module.id,
  selector: 'dashboard-container', 
  templateUrl: 'dashboard.component.html',
})

export class DashboardComponent implements OnInit {

release_info:Array<any>=[];
ngOnInit(){
  
}
constructor(private service:DataService){

 this.service.getRelease().subscribe((res:any)=>{
   console.log(res);
   this.release_info=res;
 })
}
 

}