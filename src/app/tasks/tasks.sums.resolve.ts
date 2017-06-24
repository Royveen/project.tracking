import {Injectable,} from '@angular/core'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import { Router, ActivatedRouteSnapshot,Resolve, Params,RouterStateSnapshot } from '@angular/router';
import { DataService } from '../core/services/data.service'
import { DialogService } from '../core/services/dialog.service'
import { ITasks } from '../shared/interfaces'
import { ISum } from '../shared/interfaces'
declare var swal:any
@Injectable()
export class TaskSumResolver implements Resolve<ISum> {
   releaseID:string;
    constructor(private service:DataService,private router: Router,private dialog:DialogService){

    }


resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
      this.service.loader=true;
       this.releaseID = route.params['id'];
       console.log('resolving Sums');
    return this.service.getSums(this.releaseID);
  }
}