import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredients } from 'src/app/shared/ingredients.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  
  @ViewChild('f') slForm :NgForm;

  subscription:Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem:Ingredients;

  constructor(private shoppingListService:ShoppingListService) { }

  addData(form:NgForm)
  {
    const value = form.value;
    var newIngredient = new Ingredients(Math.floor(Math.random() * 123134),value.name,value.amount);
    this.shoppingListService.addIngredients(this.editMode,this.editedItemIndex,newIngredient);
    this.editMode = false;
    this.slForm.reset();
  }

  onClearForm()
  {
    this.editMode = false;
    this.slForm.reset();
  }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.selectedItem.
      subscribe((selectedItem)=>{
        this.editedItemIndex = selectedItem;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredientsByIndex(selectedItem);
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        });
        
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
