import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from 'rxjs';

import { Recipe } from "./recipe.model";
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping/shopping-list.service';

@Injectable()
export class RecipeService{

    selectedRecipe = new EventEmitter<Recipe>();
    recipeChanged =  new Subject<Recipe[]>();

    recipes:Recipe[] = [
        new Recipe(1,'SUJI KA HALWA','A test Recipe',
        "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2018/09/upma-recipe-3-500x500.jpg",
        [
            new Ingredients('11','Meat', 1100),
            new Ingredients('12','French Fries', 200)
        ]
        ),
        new Recipe(2,'Noodles','Delicious Recipe',
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnKqVzSO_DPG4WhpQnPU6rwGumPNLb41igASlyGq6hTCAvv_Z-&s",
        [
            new Ingredients('21','Buns', 232),
            new Ingredients('22','Meat', 112)
        ])
      ];

      constructor(private shoppingList:ShoppingListService){ }

      getRecipe(){
          return this.recipes;
      }
      
      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
      }

      deleteIngredient(index:number,id:number)
      {
        this.recipes[index].ingredients.splice(index,1);
      }
      
      saveRecipe(recipe, mode, index:any)
      { 
        if(mode)
        {
          recipe['id'] = index;
          this.recipes[index] =  recipe;
        }
        else  
        {
          recipe['id'] = Math.floor(Math.random() * 10000);
          this.recipes.push(recipe);
        }
        
        this.recipeChanged.next(this.recipes.slice());
      }

      getRecipeById(id:number){
        //return this.recipes[id];
        const recipe = this.recipes.find(
            (s) => {
              return s.id === id;
            }
          );
          return this.recipes[id];
      }
      addToShoppingList(ingredients:Ingredients[])
      {
        this.shoppingList.addtoIngredientList(ingredients);
      }
}