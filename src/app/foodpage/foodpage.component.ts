import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
import { FoodServicesService } from '../services/food/food-services.service';
import { Foods } from '../shared/models/foods';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.scss']
})
export class FoodpageComponent implements OnInit {
  food!: Foods;
  constructor(private activatedRoute: ActivatedRoute, private fs: FoodServicesService) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      {
        this.food = fs.getFoodById(params['id']);
      }
    });
  }

  ngOnInit(): void { };

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  };

}
