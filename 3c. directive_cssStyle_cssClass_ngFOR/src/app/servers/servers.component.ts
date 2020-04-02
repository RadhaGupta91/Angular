import {Component, OnInit} from "@angular/core";

@Component({
    selector:'app-servers',
    templateUrl:'./servers.component.html',
    styleUrls: ['./servers.component.css'],
})

export class ServersComponent implements OnInit{
    isServerCreated = false;
    serverId  = 10;
    serverName = '';
    serverStatus:string= 'offline';
    servers = ['demoServer1','demoServer2'];

    constructor(){
      this.serverStatus = Math.random()>0.5?'online':'offline';
    }

    ngOnInit(){

    }
    
    onCreateServer(){
        this.isServerCreated = true;
        this.servers.push(this.serverName);
    }

    getColor(){
        return this.serverStatus ==='online'?'green':'red';
    }
}