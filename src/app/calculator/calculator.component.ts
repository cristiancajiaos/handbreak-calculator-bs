import { HelpComponent } from './help/help.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
    private modal: NgbModal,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.bitrateForm = this.fb.group({
      size: ['', Validators.required],
      runtime: ['', Validators.required],
      audioBitrate: ['', Validators.required]
    });
  }

  openHelp(): void {
    this.modal.open(HelpComponent, {size:'lg'});
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

  copyBitrateToClipboard(): void {
    navigator.clipboard.writeText(this.videoBitrate.toString());
    this.toastr.success('Bitrate de video copiado al portapapeles');
  }
}
