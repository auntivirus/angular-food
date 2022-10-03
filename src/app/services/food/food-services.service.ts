import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/foods';

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
        tags: ['brownie','dessert','chocolate','cake']
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
        tags: ['burger','burgers','fastfood']
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
        tags: ['fries','frenchfries','fastfood','burger','burgerfries']
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
        tags: ['meatballs','spaghetti','spaghetti_meatballs','cake']
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
        tags: ['pizza','italianfood', 'pasta', 'pizzeria','instafood']
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
        tags: ['sizzler','sizzlers', 'foodie']
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
        tags: ['manchow','manchowsoup', 'soup','chinesesoup']
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
        tags: ['tacos','mexicanfood', 'tacobell','tacotuesday']
      }
    ]
  };
}
