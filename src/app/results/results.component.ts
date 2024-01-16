import { Component, Input } from '@angular/core';

import { DominantColors } from '../models/rest-api.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  standalone: true,
  imports:[CommonModule]
})
export class ResultsComponent {
  @Input() results: DominantColors;
}
