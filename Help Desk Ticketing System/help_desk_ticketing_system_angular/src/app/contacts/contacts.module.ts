import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import { RouterModule } from '@angular/router';
import { FeedbacksListComponent } from './feedbacks-list/feedbacks-list.component';
import { FrontendModule } from '../frontend/frontend.module';


@NgModule({
  declarations: [
    FeedbacksListComponent,
    ContactsListComponent
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
    ContactsListComponent
  ]
})
export class ContactsModule { }
