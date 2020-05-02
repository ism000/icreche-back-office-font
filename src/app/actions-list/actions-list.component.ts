import { Component, OnInit } from '@angular/core';
import {ActionLogService} from "../../services/action-log.service";
import {Observable} from "rxjs";
import {ActionLog} from "../../models/ActionLog";

@Component({
  selector: 'app-actions-list',
  templateUrl: './actions-list.component.html',
  styleUrls: ['./actions-list.component.css']
})
export class ActionsListComponent implements OnInit {


  private httpStatus: string[]=["200","201","401","403","404","500","504"]
  private status:string=null;
  private actionList: ActionLog[];
  private actions: string[];
  private action: string=null;
  private parents: any[];
  private parent: string=null;
  private agents: any[];
  private agent: string=null;
  private from: string=null;
  private to: string=null;
  private pageSize: number=10 ;
  private pageOfItems: Array<ActionLog>;

  constructor(private actionLogService: ActionLogService  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
       this.actionLogService.getActionLogs().subscribe(
            (response) => {
              this.actionList=response["actionLogs"]["actionLogsDto"]
              this.actions=response["actions"]
              this.parents=response["parents"]
              this.agents=response["agents"]
            }, (error) => {
              console.log("error: "+error);
            }, () => {
              console.log('Complete !');
            }
          );
  }
  doSearch(event){
    this.actionLogService.search(this.action,this.parent,this.agent,this.status,this.from,this.to).subscribe(
      ( response)=>{
        this.actionList=response["actionLogsDto"];
      },
      error => {
        console.log("error",error);
      }
    )

  }
  onChangePage(pageOfItems: Array<ActionLog>) {
    this.pageOfItems = pageOfItems;
  }

}
