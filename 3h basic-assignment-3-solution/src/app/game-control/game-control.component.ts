import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() onDeleteData = new EventEmitter<number>();
  interval:any;
  lastNumber = 0;
  constructor() { }

  startGame()
  {
    this.interval = setInterval(()=>{
      this.lastNumber = this.lastNumber+1;
      this.onDeleteData.emit(this.lastNumber);
    },1000)
  }
  
  pauseGame(){
    clearInterval(this.interval);
  }

  ngOnInit(): void {
  }

}
