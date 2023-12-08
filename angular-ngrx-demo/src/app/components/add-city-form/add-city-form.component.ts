import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as fromCities from '../../../app/store/city';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-add-city-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-city-form.component.html',
})
export class AddCityFormComponent implements OnInit {
  addCityForm: FormGroup = {} as FormGroup;
  errors: any = {};
  @Output() cancelForm = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit() {
    this.addCityForm = this.formBuilder.group({
      cityname: ['', [Validators.required, Validators.minLength(2)]],
      image: [''],
      description: [''],
    });
  }

  onSubmit() {
    const cityName = this.addCityForm?.get('cityname')?.value;
    const imageValue = this.addCityForm?.get('image')?.value;
    const descriptionValue = this.addCityForm?.get('description')?.value;
   
    if (!cityName) {
        return;
    }

    this.store.dispatch(fromCities.createCity({
        city: {
            id: Math.random(),
            cityName,
            summary: descriptionValue,
            image: imageValue + '.jpg'
        }
    }));
  }

  cancel() {
    this.cancelForm.emit();
  }
}
