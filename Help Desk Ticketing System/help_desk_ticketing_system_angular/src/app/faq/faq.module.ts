import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFaqComponent } from './faq-add/create-faq.component';
import { FaqListComponent } from './faq-list/faq-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import {RouterModule} from '@angular/router';
import { FrontendModule } from '../frontend/frontend.module';
import { FaqReportComponent } from './faq-report/faq-report.component';


@NgModule({
  declarations: [
    CreateFaqComponent,
    FaqListComponent,
    FaqReportComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FrontendModule
  ],
  bootstrap: [
    FaqListComponent
  ]
})
export class FaqModule { }
