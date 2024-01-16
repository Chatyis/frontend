import { Component, Input } from '@angular/core';

import { DominantColors } from '../models/rest-api.model';
import { CommonModule } from '@angular/common';

import { ArrToRgbValuePipe } from '../pipes/arrToRgbValue.pipe';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  standalone: true,
  imports:[ArrToRgbValuePipe, CommonModule]
})
export class ResultsComponent {
  @Input() results: DominantColors;
  @Input() error: HttpErrorResponse;
  @Input() isResponseLoading: boolean = false;

  constructor(private arrToRgbPipe: ArrToRgbValuePipe) { }
  
  protected copyToClipboard(result: Array<Number>): void{
    navigator.clipboard.writeText(this.arrToRgbPipe.transform(result));
  }
}
