import { Component, OnInit, OnDestroy } from '@angular/core';
import{FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoppingListService } from './shopping-list.service';

import {Ingredients} from '../shared/ingredients.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit , OnDestroy
{
  id:any;
  name: string;
  amount:number;
  ingredients = [];
  private shoppingListSubscribe :Subscription;

  // To pass data to child component
  item:any; 

  constructor(private formBuilder: FormBuilder,private shoppingListService:ShoppingListService) { }

  // onEdit(serverdata:any)
  // {
  //   //Pass data to "shopping-edit.ts" component
  //   this.item = serverdata;
  // }

  ngOnInit(): any {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListSubscribe = this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredients[])=>{
      this.ingredients = ingredients;
    })
  }
  ngOnDestroy(): void{
    this.shoppingListSubscribe.unsubscribe();
  }
}
