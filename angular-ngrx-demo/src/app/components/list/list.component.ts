import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ListItemComponent } from '../list-item/list-item.component';
import { NgFor, NgForOf, NgIf } from '@angular/common';
import { ICity } from '../../../app/interfaces/city.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, NgIf, ListItemComponent],
  templateUrl: './list.component.html',

})
export class ListComponent {
  @Input() citiesList?: ICity[] | null;
  @Input() activeCity?: ICity;

  constructor() {}
}
