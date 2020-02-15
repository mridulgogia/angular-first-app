import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190611-mandarin-orange-salad-274-portrait-pf-1561556606.png'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190611-mandarin-orange-salad-274-portrait-pf-1561556606.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
