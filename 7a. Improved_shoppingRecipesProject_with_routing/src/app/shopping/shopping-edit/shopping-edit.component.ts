import { Component, OnInit , EventEmitter, Output,Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import {ShoppingListService} from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnChanges {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  //item act as a property of current class to populate e
  item;
  ingredients:Ingredients[]=[];

  buttonName = "Add";
  id:any;
  name: string;
  amount:number;

  constructor(private shoppingListService:ShoppingListService) { }

  addData()
  {
    this.shoppingListService.addIngredients(this.id,this.name,this.amount);

    this.id = null;
    this.name = null;
    this.amount = null;
    
    if(this.id == undefined || this.id != this.item.id)
    {
        this.buttonName = "Add";
    }
  }

  //Embedd changes into form - data passed from parent component(shopping.component.ts)
  ngOnChanges(simpleChange:SimpleChanges){
  
  }

  ngOnInit(): void {
    this.shoppingListService.selectedItem.subscribe((selectedItem)=>{
      this.item = selectedItem;
      this.id = this.item.id;
      this.name = this.item.name;
      this.amount = this.item.amount;
      this.buttonName  ="Edit";
    });
  }

}
