import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActionLogService {

  private  baseUrl = "http://localhost:8085/api/backoffice" ;

  constructor(private http: HttpClient) { }

  public getActionLogs(){
   return this.http.get(this.baseUrl+"/actionLogs");
  }

  public search(action:string,parent:string,agent:string,status:string,from:string,to:string)
  {
    let params = new HttpParams();

    params = params.append('action', action);
    params = params.append('parent', parent);
    params = params.append('agent', agent);
    params = params.append('status', status);
    params = params.append('from', from);
    params = params.append('to', to);

    return this.http.get(this.baseUrl+"/find", { params: params })

  }
}
