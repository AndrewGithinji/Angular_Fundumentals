import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit{
  name: string = "Lemonade";
  ingredient1: string = "Lemon";
  ingredient2: string = "Water";
  ingredient3: string = "Sugar";


  constructor() { }

  ngOnInit(): void {
    
  }
}

