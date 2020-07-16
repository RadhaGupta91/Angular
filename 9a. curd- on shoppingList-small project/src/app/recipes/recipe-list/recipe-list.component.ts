import { Component, OnInit, OnDestroy} from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
  
})
export class RecipeListComponent implements OnInit, OnDestroy{
  recipes: Recipe[];
  subscription :Subscription;

  constructor(private recipeService:RecipeService) { }
  
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe();
    this.subscription = this.recipeService.recipeChanged
    .subscribe((recipes:Recipe[])=>{
      this.recipes = this.recipes
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
