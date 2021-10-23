import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  videoBitrate: number;

  bitrateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.bitrateForm = this.fb.group({
      size: ['', Validators.required],
      runtime: ['', Validators.required],
      audioBitrate: ['', Validators.required]
    });
  }

  checkValidityField(field: string): boolean {
    const control = this.bitrateForm.controls[field];
    return control.touched && control.invalid;
  }

  calculateBitrate(): void {
    const formsValue = this.bitrateForm.value;
    this.videoBitrate = Math.ceil((formsValue.size * 1024 * 8) / formsValue.runtime) - formsValue.audioBitrate;
  }

  resetForm(): void {
    this.bitrateForm.reset();
    this.videoBitrate = null;
  }
}
