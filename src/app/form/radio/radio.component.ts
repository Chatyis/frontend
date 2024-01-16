import { Component, Input } from '@angular/core';

import { ControlAbstract } from '../control.abstract';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
})
export class RadioComponent extends ControlAbstract {
  @Input() value: boolean;
  @Input() name: string;
}
