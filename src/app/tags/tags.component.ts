import { Component, OnInit, Input } from '@angular/core';
import { FoodServicesService } from '../services/food/food-services.service';
import { Tag } from '../shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input() tags?: Tag[] = [];
  @Input() foodPageTags?: string[];
  @Input() justifyContent: string = 'center';
  constructor(private fs: FoodServicesService) { }

  ngOnInit(): void {
    if(!this.foodPageTags)
    {
      this.tags = this.fs.getAllTag();
    }
  }

}
