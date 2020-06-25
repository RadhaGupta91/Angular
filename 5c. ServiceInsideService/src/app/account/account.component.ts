import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})

export class AccountComponent{
  @Input() account :{name:string,status:string};
  @Input() id: number;

  constructor(private accountService:AccountService,
    private loggingService:LoggingService) {}

  onSetTo(status:string)
  {
    //call account service
    this.accountService.onStatusChanged(this.id,status);

    
  }
}
