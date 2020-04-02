import {Component, OnInit} from "@angular/core";

@Component({
    selector:'app-servers',
    templateUrl:'./servers.component.html',
    styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit{
    isServerCreated = false;
    serverName  = "";

    ngOnInit(){

    }
    
    onUpdateServerName(event : any){
        this.serverName = (<HTMLInputElement>event.target).value;
    }
    onCreateServer(){
        this.isServerCreated = true;
    }
}