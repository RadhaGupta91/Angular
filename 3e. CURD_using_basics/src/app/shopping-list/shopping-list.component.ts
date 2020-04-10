import { Component, OnInit } from '@angular/core';

import {Ingredients} from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  name: string;
  amount:number;
  id:any;

  ingredients:Ingredients[] = [
    new Ingredients(1,"Apple",100),
    new Ingredients(2,"Grapes",400),
    new Ingredients(3,"Tomatoes",330)
  ];

  constructor() { 

  }

  addData(){
    
    if(this.id)
    {
      var removeIndex = this.ingredients.map(function(item) { return item.id; }).indexOf(this.id);
      this.ingredients[removeIndex]["name"] = this.name;
      this.ingredients[removeIndex]["amount"] = this.amount;
      this.id = 0;    
      this.name = "";    
      this.amount = 0 ;
    }else{
      var newContact = new Ingredients(Math.floor(Math.random() * 123134),this.name,this.amount);
      this.ingredients.push(newContact);

    }
  }
  
  editContact(id:any){
    var editId = this.ingredients.map(function(item) { return item.id; }).indexOf(id);
    var item = this.ingredients[editId];
    this.id = item["id"];    
    this.name = item["name"];    
    this.amount = item["amount"];
  }

  deleteContact(id:any)
  {
      var removeIndex = this.ingredients.map(function(item) { return item.id; }).indexOf(id);
      // remove object
      this.ingredients.splice(removeIndex, 1);
      this.ngOnInit();
  }

  ngOnInit(): void {
  }

}
