import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './recipes/recipes-resolver.service';

const routes: Routes = [
  {path:'',redirectTo:'/recipes', pathMatch:'full'},
  {path:'recipes',component:RecipesComponent,
  children:[
    {path:'',component:RecipeStartComponent},
    {path:'new',component:RecipeEditComponent},
    {
      path:':id',
      component:RecipeDetailComponent,
      resolve :[RecipeResolverService]
    },
    { 
      path:':id/edit',
      component:RecipeEditComponent,
      resolve :[RecipeResolverService]
    }
  ]},
  {path:'recipes/1',component:RecipesComponent},
  {path:'shopping',component:ShoppingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
