import { Component, OnInit } from '@angular/core';

import {Ingredients} from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredients[] = [
    new Ingredients("Apple",100),
    new Ingredients("Grapes",400),
    new Ingredients("Tomatoes",330)
  ];

  constructor() { 

  }

  ngOnInit(): void {
  }

}
