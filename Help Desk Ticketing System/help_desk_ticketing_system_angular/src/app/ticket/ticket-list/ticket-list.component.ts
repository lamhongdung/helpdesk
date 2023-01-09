import { TicketService } from "../services/ticket.service";
import { Ticket } from "../services/ticket";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: "app-ticket-list",
  templateUrl: "./ticket-list.component.html",
  styleUrls: ["./ticket-list.component.css"]
})
export class ticketListComponent implements OnInit {
  ticket: Observable<Ticket[]>;
  user_level_id = window.sessionStorage.user_level_id;
  user_id = window.sessionStorage.user_id;

  constructor(private ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    if(this.user_level_id == 2)
      this.ticket = this.ticketService.getMyTicketList(this.user_id);
    else
      this.ticket = this.ticketService.getAllTicketList();
  }

  public openNewTab(ticket) {
    window.open(ticket, '_blank');
  }

  deleteticket(id: number) {
    this.ticketService.deleteticket(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
