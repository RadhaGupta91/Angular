import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService} from '../logging.service.';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggingService]
})

export class AccountComponent{
  @Input() account :{name:string,status:string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, status: string}>();
  constructor( private loggingService:LoggingService) {}

  onSetTo(newStatus:string)
  {
    this.statusChanged.emit({id: this.id,status:newStatus});
    this.loggingService.logToConsole(`A server status changed, new status: ${newStatus}`);
  }
}
