import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:'/recipes', pathMatch:'full'},
  /**start** below approach doesn't work for latest angular projects */
    // {path:'recipes',loadChildren:'./recipes/recipe-module#RecipeModule'},
    // {path:'shopping',loadChildren:'./shopping/shopping-list.module#ShoppingListModule'},
  /**end** below approach doesn't work for latest angular projects */

  // Lazy Loading
  {
    path: "recipes",
    loadChildren: () =>
      import("./recipes/recipe-module").then(m => m.RecipeModule)
  },
  {
    path: "shopping",
    loadChildren: () =>
      import("./shopping/shopping-list.module").then(
        m => m.ShoppingListModule
      )
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  //preloadingStrategy:PreloadAllModules - will load modules in advance
  exports: [RouterModule]
})
export class AppRoutingModule { }
