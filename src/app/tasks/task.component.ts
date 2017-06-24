import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params } from '@angular/router';
import { Location } from '@angular/common'
import { DataService } from '../core/services/data.service'
import { TaskFactory } from './task.factory'
import 'rxjs/add/operator/filter';
import { ITasks } from '../shared/interfaces'
@Component({
  moduleId: module.id,
  selector: 'task-info',
  templateUrl: 'task.component.html'
})
export class TaskComponent implements OnInit {
  previousUrl = this.service.prevUrl;
  title = '';

  constructor(private route: ActivatedRoute, private service: DataService, public task_factory: TaskFactory, private location: Location) {
    this.task_factory.task_info = this.route.snapshot.data['tasks'];
    this.task_factory.sums = this.route.snapshot.data['sums'][0];
    this.task_factory.task_edit = this.service.getCopy(this.task_factory.task_info);
    this.service.getRelease(this.task_factory.releaseID).subscribe((res: any) => {
      this.title = res.relName;

      this.service.loader = false;
    })



  }

  task_add: ITasks = {
    phase: '',
    task_des: '',
    planned_start_date: {
      date: '',
      epoc: '',
      jsdate: '',
      formatted: '',
    },
    planned_end_date: {
      date: '',
      epoc: '',
      jsdate: '',
      formatted: '',
    },
    actual_start_date: {
      date: '',
      epoc: '',
      jsdate: '',
      formatted: '',
    },
    actual_end_date: {
      date: '',
      epoc: '',
      jsdate: '',
      formatted: '',
    },
    BAC: 0,
    release: this.task_factory.releaseID,
    ATD: 0,
    PV: 0,
    EV: 0,
    EAC: 0,
    ETC: 0,
    AC: 0,
    task_planned: 0,
    review_planned: 0,
    rework_planned: 0,
    SPE: 0,
    PME: 0,
    conf_management: 0,
    QA: 0,
    defect_prevention: 0,
    training: 0,
    defects_received: 0,
    defects_delivered: 0,
    showinput: true
  }
  insertTask() {
    console.log(this.task_add.release);
    var copy = Object.assign({}, this.task_add);
    this.task_factory.task_info.push(copy);
    this.task_factory.task_edit.push(copy);
  }
  ngOnInit() {


  }

}


