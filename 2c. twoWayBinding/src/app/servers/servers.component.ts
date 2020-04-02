import {Component, OnInit} from "@angular/core";

@Component({
    selector:'app-servers',
    templateUrl:'./servers.component.html',
    styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit{
    allowNewServer = false;
    serverCreationStatus = "No Server";
    serverName  = "TestServer12";

    constructor(){
        setTimeout(()=>{
            this.allowNewServer = true;
        },2000);
    }
    ngOnInit(){

    }
    
    onUpdateServerName(event : any){
        this.serverName = (<HTMLInputElement>event.target).value;
    }
    onCreateServer(){
       this.serverCreationStatus = "test Server was created : "+this.serverName;
    }
}