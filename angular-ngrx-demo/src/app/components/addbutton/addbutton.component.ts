import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { Mode } from '../../../app/interfaces/Mode';

@Component({
  selector: 'app-addbutton',
  standalone: true,
  imports: [NgIf],
  templateUrl: './addbutton.component.html',
})
export class AddbuttonComponent {
  @Input() mode?: Mode;
  @Output() changeMode = new EventEmitter();
  Mode = Mode;

  setToAddMode(mode: Mode) {
    this.changeMode.emit(mode);
  }
}
