import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ImageInputComponent } from './image-input/image-input.component';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    RadioComponent,
    InputComponent,
    ImageInputComponent
  ],
  exports: [
    RadioComponent,
    InputComponent,
    ImageInputComponent
  ]
})
export class FormModule { }
