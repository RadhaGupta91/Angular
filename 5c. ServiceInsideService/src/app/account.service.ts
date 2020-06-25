import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})

export class AccountService{

  constructor(private loggingService:LoggingService){}

  accounts = [
    {
      name:"Master Account",
      status: 'active'
    },
    {
      name:"live Account",
      status: 'inactive'
    }
  ];

  appAddAccount(accountName:string,status:string){
    this.accounts.push({name:accountName,status:status});

    //call Logging service
    this.loggingService.logToConsole(`A new server has been added ${name}`);
  }
  onStatusChanged(id:number,status:string)
  {
    this.accounts[id].status = status;

    //call Logging service
    this.loggingService.logToConsole(`A server status changed, new status: ${status}`);
  }
}