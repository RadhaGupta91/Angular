import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Ingredients} from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit 
{
  id:any;
  name: string;
  amount:number;

  // To pass data to child component
  item:any; 

  ingredients:Ingredients[] = [
    new Ingredients(1,"Apple",100),
    new Ingredients(2,"Grapes",400),
    new Ingredients(3,"Tomatoes",330)
  ];

  constructor(private formBuilder: FormBuilder) { }

  onAdd(serverdata:{id:any, name:string,amount:number}){

    if(serverdata.id)
    {
      //Find index
      var removeIndex = this.ingredients.map(function(item) { return item.id; }).indexOf(serverdata.id);
      
      //Update Array
      this.ingredients[removeIndex]["name"] = serverdata.name;
      this.ingredients[removeIndex]["amount"] = serverdata.amount;
      
    }else{
      var newContact = new Ingredients(Math.floor(Math.random() * 123134),serverdata.name,serverdata.amount);
      this.ingredients.push(newContact);
    }
  }
  
  onEdit(serverdata:any)
  {
    //Pass data to "shopping-edit.ts" component
    this.item = serverdata;
  }

  onDelete(serverdata:{id:any})
  {
      //Find index
      var removeIndex = this.ingredients.map(function(item) { return item.id; }).indexOf(serverdata.id);
      
      //Remove object
      this.ingredients.splice(removeIndex, 1);
      this.ngOnInit();
  }

  ngOnInit(): any {
      
  }
}
