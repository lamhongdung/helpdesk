
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLogin } from './user/user-login/user-login.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { PageLayoutComponent } from './layouts/page-layout/page-layout.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { HomePageComponent } from './frontend/home-page/home-page.component';
import { AboutPageComponent } from './frontend/about-page/about-page.component';
import { ContactPageComponent } from './frontend/contact-page/contact-page.component';

import { TicketDetailsComponent } from './ticket/ticket-details/ticket-details.component';
import { LoginComponent } from './frontend/login/login.component';
import { CustomerComponent } from './frontend/customer/customer.component';
import { DashboardComponent } from './frontend/dashboard/dashboard.component';
import { CommentsComponent } from './frontend/comments/comments.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { FeedbacksListComponent } from './contacts/feedbacks-list/feedbacks-list.component';
import { FeedbackPageComponent } from './frontend/feedback-page/feedback-page.component';
import { CreateCategoryComponent } from './category/category-add/create-category.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CreateCustomerComponent } from './customer/customer-add/create-customer.component';
import { AdminLoginComponent } from './frontend/admin-login/admin-login.component';
import { CreateFaqComponent } from './faq/faq-add/create-faq.component';
import { FaqListComponent } from './faq/faq-list/faq-list.component';
import { CreateticketComponent } from './ticket/ticket-add/create-ticket.component';
import { ticketListComponent } from './ticket/ticket-list/ticket-list.component';
import { FaqReportComponent } from './faq/faq-report/faq-report.component';

const routes: Routes = [
  // Site routes goes here 
  { 
    path: '', 
    component: LoginLayoutComponent ,
    children: [
      { path: 'admin/login', component: UserLogin },
      
      { path: '', component: HomePageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: CustomerComponent },
      { path: 'contact', component: ContactPageComponent },
      { path: 'feedback', component: FeedbackPageComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'my-comments', component: CommentsComponent },
      { path: 'admin-login', component: AdminLoginComponent },
      { path: 'category/add', component: CreateCategoryComponent },
      { path: 'category', component: CategoryListComponent },
      { path: 'category/update-category/:id', component: CreateCategoryComponent },
      { path: 'faq/add', component: CreateFaqComponent },
      { path: 'faq', component: FaqListComponent },
      { path: 'faq-report', component: FaqReportComponent },
      { path: 'faq/update-faq/:id', component: CreateFaqComponent },

      { path: 'ticket/add', component: CreateticketComponent },
      { path: 'ticket', component: ticketListComponent },
      { path: 'ticket/update-ticket/:id', component: CreateticketComponent },
      { path: 'ticket-details/:id', component: TicketDetailsComponent },

      { path: 'contact-report', component: ContactsListComponent },
      { path: 'feedback-report', component: FeedbacksListComponent },
      { path: 'user', component: CustomerListComponent },
      { path: 'user/add', component: CreateCustomerComponent },
      { path: 'user/update-user/:id', component: CreateCustomerComponent },
      { path: 'customer', component: CustomerListComponent },
      { path: 'customer/add', component: CreateCustomerComponent },
      { path: 'customer/update-customer/:id', component: CreateCustomerComponent },

    ]
  },
  { 
    path: '', 
    component: PageLayoutComponent ,
    children: [
      
      { path: 'user/dashboard', component: UserDashboardComponent },
  
      { path: 'admin/category/add', component: CreateCategoryComponent },
      { path: 'admin/category', component: CategoryListComponent },
      { path: 'admin/category/update-category/:id', component: CreateCategoryComponent },

      { path: 'admin/contact', component: ContactsListComponent },
      { path: 'admin/feedback', component: FeedbacksListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
