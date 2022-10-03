import { Component, OnInit } from '@angular/core';
import { FoodServicesService } from '../services/food/food-services.service';
import { Foods } from '../shared/models/foods';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public foods: Foods[] = [];

  constructor(private fs: FoodServicesService, private router: ActivatedRoute) { };

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      if(params['searchItem'])
      {
        this.foods = this.fs.getAllFood().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
      }
      else
      {
        this.foods = this.fs.getAllFood(); //images of food in string array.x
      }
    });
  };

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}
