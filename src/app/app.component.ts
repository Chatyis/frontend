import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { RestApiService } from './rest-api/rest-api.service';
import { DominantColors } from './models/rest-api.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  protected form = this.fb.group({
    file: [ {value: {name: 'Please upload file...'}, disabled:true} ],
    areCustomParametersApplied: [false],
    clusterAmount: ['32', [Validators.required, Validators.min(1), Validators.max(100)]],
    maximumFileSize: ['250', [Validators.required, Validators.min(1), Validators.max(1000)]],
    applyRag: [false],
    ragThreshold: ['16', [Validators.required, Validators.min(1), Validators.max(32)]]
  })
  currPath: string | ArrayBuffer = '../assets/Red_eyed_tree_frog_edit2.jpg';
  rgbValues: DominantColors;

  constructor(private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private restApiService: RestApiService) {
    this.toggleParameters(false);
    this.form.controls.areCustomParametersApplied.valueChanges.subscribe(changes => {
      this.toggleParameters(changes);
    });
    this.form.controls.applyRag.valueChanges.subscribe(changes => {
      this.toggleRag(changes);
    })
  }

  protected onImageUpload(event): void {
    const file = event.target.files[0];

    var reader = new FileReader();
    reader.readAsDataURL(file);
		this.form.controls.file.setValue(file);
    console.log(this.form.controls.file.value)

		reader.onload = (_event) => {
      this.currPath = reader.result; 
      this.cdr.markForCheck();
    }
  }
  
  protected submit(): void {
    const formData = new FormData()

    Object.keys(this.form.controls).forEach(key => {
      const control = this.form.get(key);

      formData.append(key, control.value);
    });

    this.restApiService.sendFormData(formData).subscribe(res => {
      this.rgbValues = res;
      this.rgbValues.result = res.result.map(result => result.trim().split(',').filter(rgbValue => rgbValue !== ''));
      this.rgbValues.result = this.rgbValues.result.map(rgbArr => rgbArr.map(rgbElement => +rgbElement));
      this.cdr.markForCheck();
    });
  }

  private toggleParameters(shouldEnable): void {
    if (shouldEnable) {
      this.form.controls.clusterAmount.enable();
      this.form.controls.maximumFileSize.enable();
      this.form.controls.applyRag.enable();
      if (this.form.controls.applyRag.value) {
        this.form.controls.ragThreshold.enable();
      }
    } else {
      this.form.controls.clusterAmount.disable();
      this.form.controls.maximumFileSize.disable();
      this.form.controls.applyRag.disable();
      this.form.controls.ragThreshold.disable();
      this.form.controls.applyRag.setValue(false);
    }
    this.cdr.markForCheck();
  }

  private toggleRag(shouldEnable): void {
    shouldEnable ? this.form.controls.ragThreshold.enable() : this.form.controls.ragThreshold.disable();
  }
}
