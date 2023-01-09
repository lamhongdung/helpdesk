import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FrontendHeaderComponent } from './frontend-header/frontend-header.component';
import { FrontendFooterComponent } from './frontend-footer/frontend-footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { CommentsComponent } from './comments/comments.component'; 
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';


@NgModule({
  declarations: [
    HomePageComponent, 
    AboutPageComponent, 
    ContactPageComponent, 
    FeedbackPageComponent,
    FrontendHeaderComponent, 
    FrontendFooterComponent, 
    LoginComponent,
    CustomerComponent,
    DashboardComponent,
    CommentsComponent,
    AdminLoginComponent
  ],
  exports:[
    FrontendHeaderComponent, 
    FrontendFooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class FrontendModule { }
