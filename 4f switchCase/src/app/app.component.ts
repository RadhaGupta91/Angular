import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value = 10;
  Numbers = [5,10,15,20,25];

  selectedValue(val)
  {
    this.value = val;
  }
}
