import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/foods';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodServicesService {

  constructor() { };

  getAllFood(): Foods[] {
    return [
      {
        id: 1,
        name: 'Brownie',
        cookTime: '20-25',
        price: 45,
        favorite: false,
        origins: ['USA'],
        stars: 4.5,
        imageURL:'assets/food-images/food-1.jpg',
        tags: ['Brownie','Dessert','Chocolate','Cake']
      },
      {
        id: 2,
        name: 'Burger',
        cookTime: '8-10',
        price: 25,
        favorite: true,
        origins: ['USA','Germany'],
        stars: 3.5,
        imageURL:'assets/food-images/food-2.jpg',
        tags: ['Burger','Fastfood']
      },
      {
        id: 3,
        name: 'French Fries',
        cookTime: '20-30',
        price: 45,
        favorite: true,
        origins: ['Belgium'],
        stars: 3,
        imageURL:'assets/food-images/food-3.jpg',
        tags: ['fries','Fastfood','Burger']
      },
      {
        id: 4,
        name: 'Spaghetti & Meatballs',
        cookTime: '60 - 90',
        price: 19,
        favorite: false,
        origins: ['USA', 'Italy'],
        stars: 2.5,
        imageURL:'assets/food-images/food-4.jpg',
        tags: ['Meatballs','Spaghetti']
      },
      {
        id: 5,
        name: 'Pizza',
        cookTime: '120 - 180',
        price: 23,
        favorite: true,
        origins: ['Italy','Egyptians', 'Romans', 'Greeks'],
        stars: 1,
        imageURL:'assets/food-images/food-5.jpg',
        tags: ['Fastfood','Pizza','Lunch']
      },
      {
        id: 6,
        name: 'Paneer Sizzler',
        cookTime: '60 - 120',
        price: 29,
        favorite: false,
        origins: ['USA','India'],
        stars: 2.7,
        imageURL:'assets/food-images/food-6.jpg',
        tags: ['Sizzler']
      },
      {
        id: 7,
        name: 'Manchow Soup',
        cookTime: '30 - 45',
        price: 15,
        favorite: false,
        origins: ['India', 'South Asia'],
        stars: 3.3,
        imageURL:'assets/food-images/food-7.jpg',
        tags: ['Soup']
      },
      {
        id: 8,
        name: 'Mexican Taco',
        cookTime: '30 - 40',
        price: 25,
        favorite: true,
        origins: ['Mexico'],
        stars: 5,
        imageURL:'assets/food-images/food-8.jpg',
        tags: ['Taco', 'Fastfood']
      }
    ]
  };

  getAllTag(): Tag[] {
    return [
      {name: 'All', count: this.getAllFood().length},
      {name: 'Fastfood', count: 4},
      {name: 'Pizza', count: 1},
      {name: 'Meatballs', count: 1},
      {name: 'Burger', count: 2},
      {name: 'Taco', count: 1},
      {name: 'Soup', count: 1},
      {name: 'Dessert',count: 1}
    ];
  };
  getFoodsByTag(tag: string): Foods[] {
    return tag == "All" ?
    this.getAllFood() : this.getAllFood().filter(food => food.tags?.includes(tag));
  };
}
