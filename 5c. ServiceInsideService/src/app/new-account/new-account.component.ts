import { Component, OnInit} from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private accountService:AccountService,
              private loggingService:LoggingService) {}

  onAdd(name:string,status:string){
    //call account service
    this.accountService.appAddAccount(name,status);
    
    
  }
  
}
