import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { DataService } from '../core/services/data.service';
import { DialogService } from '../core/services/dialog.service';
import { Response } from '@angular/http';
import { IDate } from '../shared/interfaces'
// import 'rxjs/add/operator/pairwise';
declare var swal: any;
declare var _: any;
@Component({
  moduleId: module.id,
  selector: 'add-release-container',
  templateUrl: 'add.release.component.html'
})

export class AddReleaseComponent {


  constructor(private service: DataService, private dialog: DialogService) {

  }

  tasks: any = [];
  releaseDetails = {
    relName: ''
  }

  task_add = {
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
    BAC: '',
    release: ''
  }
  insertTask() {
    var copy = Object.assign({}, this.task_add);
    this.tasks.push(copy);
  }

  removeTask(id: number) {
    this.tasks.splice(id, 1);
  }


  onSubmit() {

    this.dialog.confirm('Are you sure?', () => {
      this.service.loader = true;
      this.service.addRelease(this.releaseDetails).subscribe(
        (res: any) => {
          console.log(res);
          this.tasks = _.each(this.tasks, (t: any) => t.release = res["_id"]);
          this.service.addTasks(this.tasks).subscribe((res: any) => {
            swal('success', "Saved Successfully", "success");
            this.service.loader = false;
          }, (error: any) => {
            swal('error', "The Request encountered an error, please try again after some time", "error");
            this.service.loader = false;
          });
        },
        (error: any) => {
          swal('error', "The Request encountered an error, please try again after some time", "error");
          this.service.loader = false;
        });
    })
  }
}