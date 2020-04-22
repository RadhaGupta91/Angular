import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  oddNumbers:number[] = [];
  evenNumbers:number[] = [];

  onServerEndGame(intervalFired)
  {
    if(intervalFired%2)
        this.oddNumbers.push(intervalFired);
    else
      this.evenNumbers.push(intervalFired);
    console.log("Count: "+intervalFired);
  }
  
}
