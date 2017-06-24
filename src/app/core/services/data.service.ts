import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {NgForm} from '@angular/forms';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import {IMyOptions} from 'mydatepicker';
import { IResource, IState,ILogin,ISeperation } from '../../shared/interfaces';

@Injectable()
export class DataService {
  
    resourcesBaseUrl: string = '/api/resources';
    authUrl:string='/api/loginauth/'
    resources: IResource[];
    loader:boolean=false;
    prevUrl:string='';
     myDatePickerOptions: IMyOptions = {
        dateFormat: 'mm/dd/yyyy',
        inline:false,
        editableDateField:false,
        showSelectorArrow:false,
        openSelectorTopOfInput:true,
        showClearDateBtn:false,
        showTodayBtn:false
    };
    constructor(private http: Http) { }

getCopy(objectToCopy:any) {
    return JSON.parse(JSON.stringify(objectToCopy));
}
 getChangedProperties(form:NgForm): string[] {
  let changedProperties:any = {};
  Object.keys(form.controls).forEach((name) => {
    let currentControl = form.controls[name];
    let controlValue = form.controls[name]["_value"];
    if (currentControl.dirty)
      changedProperties[name]=controlValue;
  });

  return changedProperties;
}
   getResources() : Observable<IResource[]> {
       
        return this.http.get(this.resourcesBaseUrl)
                    .map((res: Response) => {
                       console.log(res);
                    try{
                        return res.json();
                    }catch(error){
                        return res["_body"];
                    }   
                   })
                    .catch(this.handleError);
    }
    
   getResource(id: string,filter?:Object) : Observable<IResource> {
        return this.http.get(this.resourcesBaseUrl + '/' + id+ '/'+ JSON.stringify(filter))
                    .map((res: Response) => {
                       console.log(res);
                    try{
                        return res.json();
                    }catch(error){
                        return res["_body"];
                    }   
                   })
                    .catch(this.handleError);
    }

      getRelease(id: string,filter?:Object) : Observable<IResource> {
        return this.http.get('/api/release/' + id+ '/'+ JSON.stringify(filter))
                    .map((res: Response) => {
                       console.log(res);
                    try{
                        return res.json();
                    }catch(error){
                        return res["_body"];
                    }   
                   })
                    .catch(this.handleError);
    }

      getReleases() : Observable<IResource> {
        return this.http.get('/api/releases')
                    .map((res: Response) => {
                       console.log(res);
                    try{
                        return res.json();
                    }catch(error){
                        return res["_body"];
                    }   
                   })
                    .catch(this.handleError);
    }

       getTasks(id: string,filter?:Object) : Observable<IResource> {
        return this.http.get('/api/tasks/' + id+ '/'+ JSON.stringify(filter))
                    .map((res: Response) => {
                       console.log(res);
                    try{
                        return res.json();
                    }catch(error){
                        return res["_body"];
                    }   
                   })
                    .catch(this.handleError);
    }

    getStates(): Observable<IState[]> {
        return this.http.get('/api/states')
                   .map((res: Response) => {
                       console.log(res);
                    try{
                        return res.json();
                    }catch(error){
                        return res["_body"];
                    }   
                   })
                   .catch(this.handleError); 
    }
      addResource(release:any) : Observable<boolean> {
        return this.http.post(this.resourcesBaseUrl + '/release' , release)
                   .map((res: Response) => {
                    try{
                        return res.json();
                    }catch(error){
                        return res["_body"];
                    }   
                   })
                   .catch(this.handleError);
    }
    addRelease(release:any) : Observable<boolean> {
        return this.http.post(this.resourcesBaseUrl + '/release' , release)
                   .map((res: Response) => {
                    try{
                        return res.json();
                    }catch(error){
                        return res["_body"];
                    }   
                   })
                   .catch(this.handleError);
    }

     addTasks(task:any) : Observable<boolean> {
        return this.http.post(this.resourcesBaseUrl + '/tasks' , task)
                   .map((res: Response) => {
                    try{
                        return res.json();
                    }catch(error){
                        return res["_body"];
                    }   
                   })
                   .catch(this.handleError);
    }
    
    updateTask(changes:Object) : Observable<string> {
        return this.http.put('api/tasks/' + changes["_id"], changes)
                   .map((res: Response) => {
                       console.log(res);
                    try{
                        return res.json();
                    }catch(error){
                        return res["_body"];
                    }   
                   })
                   .catch(this.handleError);  
    }

       delTask(id:String) : Observable<string> {
        return this.http.delete('api/tasks/' + id)
                   .map((res: Response) => {
                       console.log(res);
                    try{
                        return res.json();
                    }catch(error){
                        return res["_body"];
                    }   
                   })
                   .catch(this.handleError);  
    }

    updateResource(id:string,changes:Object) : Observable<string> {
        return this.http.put(this.resourcesBaseUrl + '/' + id, changes)
                   .map((res: Response) => {
                       console.log(res);
                    try{
                        return res.json();
                    }catch(error){
                        return res["_body"];
                    }   
                   })
                   .catch(this.handleError);  
    }
   private handleError(error: any) {
        console.error('server error:', error); 
        if (error instanceof Response) {
          let errMessage = '';
          try {
            errMessage = error.json().error;
          } catch(err) {
            errMessage = error.status.toString();
          }
          return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'server error');
    }
}
