import { Component, Input, EventEmitter, OnInit} from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountService]
})
export class AppComponent implements OnInit {
  accounts :{name:string,status:string}[] = [];

  constructor(private accountService:AccountService){
  }

  ngOnInit()
  {
    //load accounts detials from account service
    this.accounts = this.accountService.accounts;
  }
  
}
