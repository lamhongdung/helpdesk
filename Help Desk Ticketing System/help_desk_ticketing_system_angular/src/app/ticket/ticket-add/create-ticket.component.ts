import { TicketService } from '../services/ticket.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../category/services/category.service';
import { Ticket } from '../services/ticket';
import { Category } from '../../category/services/category';


import { Component, OnInit } from '@angular/core';
import { StatusService } from 'src/app/category/services/status.service';
import { CustomerService } from 'src/app/customer/services/customer.service';
import { Status } from 'src/app/category/services/status';
import { Customer } from 'src/app/customer/services/customer';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateticketComponent implements OnInit {
  
  category: Category = new Category();
  status: Status = new Status();
  user: Customer = new Customer();
  ticket: Ticket = new Ticket();
  isUpdate = false;
  formData = new FormData();
  file: File;
  submitted = false;
  display = "block"
  user_level_id = window.sessionStorage.user_level_id;
  user_id = window.sessionStorage.user_id;
  

  constructor(
    private categoryService: CategoryService,
    private statusService: StatusService,
    private userService: CustomerService,
    private ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router,
  ) { 
    console.log("I am here");

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("I am here ticket");
    if (id) {
      this.isUpdate = true;
      this.getticket(id);
    } else {
      this.ticket.ticket_status_id = "0";
      this.ticket.ticket_type_id = "0";
      this.ticket.ticket_user_id = "0";
    }
    if(this.user_level_id == 2) {
      this.ticket.ticket_user_id = this.user_id;
      this.ticket.ticket_status_id = "5";
      this.display = "none";
    }
    this.getCategoryOption();
    this.getStatusOption();
    this.getUserOption();
  }

  getCategoryOption(): void {
    this.categoryService.getAllCategories().subscribe(
      data => {
        console.log(data);
        this.category = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  
  getStatusOption(): void {
    this.statusService.getAllStatus().subscribe(
      data => {
        console.log(data);
        this.status = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  getUserOption(): void {
    this.userService.getAllCustomers().subscribe(
      data => {
        console.log(data);
        this.user = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  getticket(id): void {
    this.ticketService.getticket(id).subscribe(
      data => {
        console.log(data);
        this.ticket = data;
      },
      err => {
        console.log(err);
      }
    );

  }
 

  newticket(): void {
    this.submitted = false;
    this.ticket = new Ticket();
  }

save() {    
  console.log(this.ticket);
 
  this.ticketService.createticket(this.ticket).subscribe(
    data => {
      console.log(data);
      // this.isSuccessful = true;
      // this.isSignUpFailed = false;
      this.newticket();
      this.router.navigate(['/ticket']);
    },
    err => {
      // this.errorMessage = err.error.message;
      // this.isSignUpFailed = true;
    }
  );
}

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.updateticket();
    } else {
      this.submitted = true;
      this.save();
    }
    
  }

  updateticket(): void {
    
    // Put ticket form in FormData ///
    for (let key in this.ticket) {
      console.log("Insie Iterator")
      this.formData.append(key, this.ticket[key]);
    }
    if(this.file) {
      console.log("I am here");
      // End of Request ///
      this.ticketService.updateUploadticket(this.ticket.ticket_id, this.formData).subscribe(
        data => {
          console.log(data);
          // this.isSuccessful = true;
          // this.isSignUpFailed = false;
          this.router.navigate(['/ticket']);
        },
        err => {
          // this.errorMessage = err.error.message;
          // this.isSignUpFailed = true;
        }
      );
    } else {
      // End of Request ///
      this.ticketService.updateticket(this.ticket.ticket_id, this.ticket).subscribe(
        data => {
          console.log(data);
          // this.isSuccessful = true;
          // this.isSignUpFailed = false;
          this.router.navigate(['/ticket']);
        },
        err => {
          // this.errorMessage = err.error.message;
          // this.isSignUpFailed = true;
        }
      );
    }
    
  }
}
