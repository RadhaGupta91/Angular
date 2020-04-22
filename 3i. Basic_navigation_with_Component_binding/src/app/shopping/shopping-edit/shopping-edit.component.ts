import { Component, OnInit , EventEmitter, Output,Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnChanges {

  //Emit events and pass to parent component to take appropriate action
  @Output() onAddData = new EventEmitter<{id:any, name:string,amount:number}>();

  //item act as a property of current class and will recieve data from parent component(shopping.component.ts)
  @Input() item;
  
  buttonName = "Add";
  id:any;
  name: string;
  amount:number;

  constructor() { }

  addData()
  {
    this.onAddData.emit({id:this.id,name:this.name,amount:this.amount});

    this.id = null;
    this.name = null;
    this.amount = null;
    
    if(this.id != this.item.id)
    {
        this.buttonName = "Add";
    }
  }

  //Embedd changes into form - data passed from parent component(shopping.component.ts)
  ngOnChanges(simpleChange:SimpleChanges){

    if(this.item != null)
    {
      if(this.id != this.item.id)
      {
        this.id = this.item.id;
        this.name = this.item.name;
        this.amount = this.item.amount;
        this.buttonName  ="Edit";
      }
    }
  }

  ngOnInit(): void {
  }

}
