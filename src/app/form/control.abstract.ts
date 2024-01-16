import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
    template: ''
})
export abstract class ControlAbstract {
    @Input() control: FormControl<any>;
    @Input() label: string;
}