import { Component, OnInit, Input,EventEmitter, Output} from '@angular/core';
import{FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Ingredients} from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  //Emit events and pass to parent component to take appropriate action
  @Output() onEditData = new EventEmitter<Ingredients>();
  @Output() onDeleteData = new EventEmitter<{id:any}>();
  //item act as a property of current class and will recieve data from parent component(shopping.component.ts) 
  @Input() ingredient;
  
  constructor() { }

  ngOnInit(): any {
  }

  deleteData(id:any)
  {
    this.onDeleteData.emit({id:id});
  }

  editData(Ingredients)
  {
    this.onEditData.emit(Ingredients);
  }

}
