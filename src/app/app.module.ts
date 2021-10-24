import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HelpComponent } from './calculator/help/help.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CalculatorComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ToastrModule.forRoot({
      closeButton: true,
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
