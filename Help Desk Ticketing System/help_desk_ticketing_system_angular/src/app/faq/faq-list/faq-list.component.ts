import { FaqService } from "../services/faq.service";
import { Faq } from "../services/faq";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: "app-faq-list",
  templateUrl: "./faq-list.component.html",
  styleUrls: ["./faq-list.component.css"]
})
export class FaqListComponent implements OnInit {
  faq: Observable<Faq[]>;
  user_level_id = window.sessionStorage.user_level_id;

  constructor(private faqService: FaqService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.faq = this.faqService.getAllCategories();
  }

  public openNewTab(faq) {
    window.open(faq, '_blank');
  }

  deleteFaq(id: number) {
    this.faqService.deleteFaq(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
