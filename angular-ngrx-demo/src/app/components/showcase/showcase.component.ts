import { Component, Input } from '@angular/core';
import { ICity } from '../../../app/interfaces/city.interface';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [],
  templateUrl: './showcase.component.html',
})
export class ShowcaseComponent {
  @Input() activeCity?: ICity;
}
