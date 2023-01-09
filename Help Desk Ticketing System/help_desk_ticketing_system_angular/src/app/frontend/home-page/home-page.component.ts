import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  user_level_id = window.sessionStorage.user_level_id;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
  }

  public openNewTab(rtype) {
    window.open(rtype, '_blank');
  }
}
