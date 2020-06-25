import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { LoggingService} from '../logging.service.';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]
})
export class NewAccountComponent implements OnInit {
  @Output() addAccount = new EventEmitter<{name:string,status:string}>();
  constructor( private loggingService:LoggingService) {}

  onAdd(name:string,status:string){
    this.addAccount.emit({name:name,status:status});
    this.loggingService.logToConsole(`A new server has been added ${name}`);
  }

  ngOnInit(): void {
  }

}
