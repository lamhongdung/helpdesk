import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateticketComponent } from './ticket-add/create-ticket.component';
import { ticketListComponent } from './ticket-list/ticket-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import {RouterModule} from '@angular/router';
import { FrontendModule } from '../frontend/frontend.module';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';


@NgModule({
  declarations: [
    CreateticketComponent,
    ticketListComponent,
    TicketDetailsComponent
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
    ticketListComponent
  ]
})
export class TicketModule { }
