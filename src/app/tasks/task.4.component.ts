import {Component,OnInit,OnDestroy} from '@angular/core'
import { Router, ActivatedRoute, Params , CanDeactivate} from '@angular/router';
import {DataService} from '../core/services/data.service'
import {DialogService} from '../core/services/dialog.service'
import {ITasks} from '../shared/interfaces'
import {TaskFactory} from './task.factory'
declare var swal:any;
@Component({
    moduleId:module.id,
    selector:'task4-container',
    templateUrl:'task.4.component.html'
})

export class Task4Component{

   
constructor(private factory:TaskFactory){
  

      
}

}