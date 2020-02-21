import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190611-mandarin-orange-salad-274-portrait-pf-1561556606.png',
    [
      new Ingredient( 'Patty', 5 ),
      new Ingredient('Bun', 10)
    ]
    ),
    // tslint:disable-next-line:max-line-length
    new Recipe('Another Test Recipe',
      'This is simply a test',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190611-mandarin-orange-salad-274-portrait-pf-1561556606.png',
      [
        new Ingredient('Bread', 4),
        new Ingredient('Peanut Butter', 12),
        new Ingredient('Jelly Jam', 12)
      ]
    )
  ];

getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
