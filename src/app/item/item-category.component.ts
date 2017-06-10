import { Component, Input } from '@angular/core';
@Component({
  selector: 'item-category',
  templateUrl: 'item-category.component.html',
  styleUrls: ['item-category.component.css']
})
export class ItemCategoryComponent {
  @Input()
  category: string;
}
