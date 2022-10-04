import { Component, OnInit } from '@angular/core';
import { FoodServicesService } from '../services/food/food-services.service';
import { Tag } from '../shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  tags: Tag[] = [];
  constructor(private fs: FoodServicesService) { }

  ngOnInit(): void {
    this.tags = this.fs.getAllTag();
  }

}
