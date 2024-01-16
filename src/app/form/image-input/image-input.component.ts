import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
})
export class ImageInputComponent {
  @Output() uploaded = new EventEmitter<Event>();

  protected fileUploaded(event) {
    this.uploaded.emit(event)
  }
}
