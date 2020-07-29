import { Component, OnInit, Input} from '@angular/core';
import{FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Ingredients} from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  //Emit events and pass to parent component to take appropriate action
  //item act as a property of current class and will recieve data from parent component(shopping.component.ts) 
  @Input() ingredient;
  @Input() i;
  
  ingredients: Ingredients[];

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): any {
  }

  deleteData(id:any)
  {
    this.shoppingListService.deleteIngredient(id);
  }

  editData(index:number)
  {
    //emit replaced with next method
    this.shoppingListService.selectedItem.next(index);
  }

}
