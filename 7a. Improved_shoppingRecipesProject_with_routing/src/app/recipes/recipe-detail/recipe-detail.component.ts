import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe:Recipe;
  id: number;

  constructor(private recipeService:RecipeService,
              private route:ActivatedRoute) { }
  
  onAddingToShoppingList(){
    this.recipeService.addToShoppingList(this.recipe.ingredients);
  }
  ngOnInit(): void {
    this.route.params
    .subscribe((params:Params)=>{
      if(params['id'] != 'new')
      {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeById(this.id);
      }
    })
  }

}
