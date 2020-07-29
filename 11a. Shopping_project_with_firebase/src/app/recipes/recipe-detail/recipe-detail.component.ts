import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe:Recipe;
  id: number;

  constructor(private recipeService:RecipeService,
              private route:ActivatedRoute,private router:Router) { }
  
  onAddingToShoppingList(){
    this.recipeService.addToShoppingList(this.recipe.ingredients);
  }
  onDeleteRecipe()
  {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
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
