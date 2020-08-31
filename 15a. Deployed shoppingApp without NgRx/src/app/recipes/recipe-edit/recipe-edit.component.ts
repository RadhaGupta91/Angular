import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, NgForm, Validators, FormArray } from '@angular/forms';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  

  constructor(private route: ActivatedRoute, private recipesService:RecipeService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  private initForm()
  {
    let recipeIngredients = new FormArray([]);
    let recipeName = 'Gulab';
    let recipeImagePath = '';
    let recipeDescription = "";
    const recipe  = this.recipesService.getRecipeById(this.id);
    if(this.editMode)
    {
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      //create nested elements

      if(recipe['ingredients'])
      {
        for(let ingredient of recipe.ingredients)
        {
          recipeIngredients.push(
            new FormGroup({
              'id': new FormControl(ingredient.id),
              'name': new FormControl(ingredient.name,Validators.required),
              'amount':new FormControl(ingredient.amount,[
                Validators.required,Validators.pattern(/^[1-9][0-9]*$/)])
            })
          );
        }

      }
    }
  
    this.recipeForm =  new FormGroup({
      'name': new FormControl(recipeName,Validators.required),
      'imagePath': new FormControl(recipeImagePath,Validators.required),
      'description': new FormControl(recipeDescription,Validators.required),
      'ingredients': recipeIngredients
    })
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,[
          Validators.required,Validators.pattern(/^[1-9][0-9]*$/)])
      })
    )
  }


  get controls() { // a getter!
  return (<FormArray>this.recipeForm.get('ingredients')).controls;
}
  onSubmit()
  {
    this.recipesService.saveRecipe(this.recipeForm.value,this.editMode,this.id);
    console.log(this.recipeForm);
  }
  onCancel(){
    this.recipeForm.reset();
  }

  onDeleteIngredient(index:number)
  {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);

    // Deleting all Items in a FormArray
    // (<FormArray>this.recipeForm.get('ingredients')).clear();
  }
}
