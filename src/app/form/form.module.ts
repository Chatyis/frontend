import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { ImageInputComponent } from './image-input/image-input.component';

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
