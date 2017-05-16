import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute ,NavigationEnd,Params } from '@angular/router';
import {DataService} from '../core/services/data.service'
import 'rxjs/add/operator/filter';
@Component({ 
  moduleId: module.id,
  selector: 'task-info',
  templateUrl: 'task.component.html'
})
export class TaskComponent implements OnInit {
    previousUrl='';
    title='';
    constructor(private route: ActivatedRoute, private service:DataService) {
        this.previousUrl=service.prevUrl;
        this.route.params.subscribe((params:Params)=>{
          console.log(params);
          let id=params['id'];
        this.service.getRelease(id).subscribe((res:any)=>{
          console.log(res);
          this.title=res.relName;
        })
        })
     }

    ngOnInit() {

      //No longer needed due to routerLinkActive feature in Angular
      // const path = this.router.url.split('/')[3];
      // switch (path) {
      //   case 'details':
      //     this.displayMode = CustomerDisplayModeEnum.Details;
      //     break;
      //   case 'orders':
      //     this.displayMode = CustomerDisplayModeEnum.Orders;
      //     break;
      //   case 'edit':
      //     this.displayMode = CustomerDisplayModeEnum.Edit;
      //     break;
      // }
    }

}

// enum CustomerDisplayModeEnum {
//   Details=0,
//   Orders=1,
//   Edit=2
// }
