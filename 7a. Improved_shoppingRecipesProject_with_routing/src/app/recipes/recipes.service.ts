import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping/shopping-list.service';

@Injectable()
export class RecipeService{

    selectedRecipe = new EventEmitter<Recipe>();

    recipes:Recipe[] = [
        new Recipe(1,'SUJI KA HALWA','A test Recipe',
        "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2018/09/upma-recipe-3-500x500.jpg",
        [
            new Ingredients('123112','Meat', 1100),
            new Ingredients('123112323','French Fries', 200)
        ]
        ),
        new Recipe(2,'Noodles','Delicious Recipe',
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnKqVzSO_DPG4WhpQnPU6rwGumPNLb41igASlyGq6hTCAvv_Z-&s",
        [
            new Ingredients('12323112','Buns', 232),
            new Ingredients('234234432423','Meat', 112)
        ])
      ];

      constructor(private shoppingList:ShoppingListService){ }

      getRecipe(){
          return this.recipes;
      }
      
      getRecipeById(id:number){
        //return this.recipes[id];
        const recipe = this.recipes.find(
            (s) => {
              return s.id === id;
            }
          );
          return recipe;
      }
      addToShoppingList(ingredients:Ingredients[])
      {
        this.shoppingList.addtoIngredientList(ingredients);
      }
}