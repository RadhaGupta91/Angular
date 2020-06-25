import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AccountService{

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
  }
  onStatusChanged(id:number,status:string)
  {
    this.accounts[id].status = status;
  }
}