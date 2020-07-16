import { EventEmitter } from '@angular/core';
import {Ingredients} from '../shared/ingredients.model';
import { Subject } from 'rxjs';

export class ShoppingListService{
    //Subject replcaced with EventEmitter
    selectedItem = new Subject<Ingredients>();
    ingredientsChanged = new Subject<Ingredients[]>();

    private ingredients:Ingredients[] = [
        new Ingredients(1,"Apple",100),
        new Ingredients(2,"Grapes",400),
        new Ingredients(3,"Tomatoes",330)
      ];
    
    getIngredients()
    {
        return this.ingredients;
    }
    
    addIngredients(id:number,name:string,amount:any){
    
        if(id !== null && id != undefined)
        {  
            var id = this.ingredients.map(function(item) { return item.id; }).indexOf(id);
            //Update Array
            this.ingredients[id]["name"] = name;
            this.ingredients[id]["amount"] = amount;
        }else{
            var newIngredient = new Ingredients(Math.floor(Math.random() * 123134),name,amount);
            this.ingredients.push(newIngredient);
        }
    }

    addtoIngredientList(ingredients){
        ingredients.forEach(element => {
            this.ingredients.push(element);
        });
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(id:any)
    {
        //Find index
        var removeIndex = this.ingredients.map(function(item) { return item.id; }).indexOf(id);
        
        //Remove object
        this.ingredients.splice(removeIndex, 1);
    }

}