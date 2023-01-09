
import { Component, Input, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Comments } from "src/app/ticket/services/comments"; 
import { TicketService } from "src/app/ticket/services/ticket.service"; 
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Observable<Comments[]>;
  user_level_id = window.sessionStorage.user_level_id;
  id = ""

  constructor(private commentsService: TicketService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.id = window.sessionStorage.user_id;
    if(this.id) {
      this.reloadData(this.id);
    } else {
      this.reloadData(0);
    }
  }

  reloadData(id) {
    this.comments = this.commentsService.getCommentsList(id);
  }

  public openNewTab(rtype) {
    window.open(rtype, '_blank');
  }

  deleteComments(id: number) {
    this.commentsService.deleteComments(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData(this.id);
        },
        error => console.log(error));
  }
}
