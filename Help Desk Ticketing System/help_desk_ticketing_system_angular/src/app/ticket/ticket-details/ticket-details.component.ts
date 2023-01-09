import { TicketService } from "src/app/ticket/services/ticket.service"; 
import { Ticket } from "../services/ticket";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/internal/Observable";
import { Comments } from "../services/comments"; 
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css'],
  providers: [DatePipe]
})
export class TicketDetailsComponent implements OnInit {
  id =""
  order_id = 0;
  user_level_id = window.sessionStorage.user_level_id;
  user_id = window.sessionStorage.user_id;
  ticket: Ticket = new Ticket();
 
  
  commentFrm: Comments = new Comments();
  ticketList: Observable<Ticket[]>;
  comments: Observable<any[]>;
  formData = new FormData();
  comment_date = new Date();

  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.getTicket(this.id);
    } 
  
    this.getAllComments(this.id);
  }

  onSubmit() {
    this.commentFrm.comments_ticket_id = this.id;
    this.commentFrm.comments_user_id = window.sessionStorage.user_id;
    this.commentFrm.comments_date = this.datePipe.transform(this.comment_date, 'yyyy-MM-dd');
    this.save(); 
  }



  save() {    
    this.ticketService.saveComment(this.commentFrm).subscribe(
      data => {
        console.log(data);
        this.getAllComments(this.id);
        this.commentFrm.comments_title = "";
        this.commentFrm.comments_description = "";
        this.router.navigate(['/ticket-details/'+this.id]);
      },
      err => {
        // this.errorMessage = err.error.message;
        // this.isSignUpFailed = true;
      }
    );
  }

  getTicket(id): void {
    this.ticketService.getTicketDetails(id).subscribe(
      data => {
        console.log("Inside Ticket : ");
        console.log(data);
        this.ticket = data[0];
      },
      err => {
        console.log(err);
      }
    );

  }

  getAllComments(id) {
    this.comments = this.ticketService.getAllComments(id);
    console.log(this.comments)
  }
}
