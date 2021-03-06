import { Component, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  appAddAccount(item:{name:string,status:string}){
    this.accounts.push({name:item.name,status:item.status});
  }

  onStatusChanged(updateInfo:{id:number,status:string})
  {
    this.accounts[updateInfo.id].status = updateInfo.status;
  }
}
