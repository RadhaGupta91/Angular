import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipes.service';
import { pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class DataStorageService{

    constructor(private http:HttpClient,private recipeService:RecipeService){

    }

    storeRecipes()
    {
        const recipes = this.recipeService.getRecipe();
        this.http.put('https://ng-course-recipe-book-a73e1.firebaseio.com/recipes.json',recipes)
        .subscribe(response=>{

        });
    }

    fetchRecipes(){
        return this.http.get<Recipe[]>
        ('https://ng-course-recipe-book-a73e1.firebaseio.com/recipes.json')
        .pipe(
            map(recipes => {
              return recipes.map(recipe => {
                return {
                  ...recipe,
                  ingredients: recipe.ingredients ? recipe.ingredients : []
                };
              });
            }),
            tap(recipes => {
              this.recipeService.setRecipe(recipes);
            })
          )
        
    }
}