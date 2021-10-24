import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(
    private modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.modal.close();
  }

}
