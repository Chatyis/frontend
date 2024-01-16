import { Component, Input } from '@angular/core';

import { ControlAbstract } from '../control.abstract';
import { InputType } from 'src/app/models/form.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent extends ControlAbstract {
  @Input() placeholder: string = "";
  @Input() type: InputType = InputType.number;
  readonly InputType = InputType;

  get isInvalid(): boolean {
    return this.control.dirty && this.control.invalid;
  }
}
