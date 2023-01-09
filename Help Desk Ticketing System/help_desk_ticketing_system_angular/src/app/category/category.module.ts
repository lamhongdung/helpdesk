import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCategoryComponent } from './category-add/create-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import {RouterModule} from '@angular/router';
import { FrontendModule } from '../frontend/frontend.module';


@NgModule({
  declarations: [
    CreateCategoryComponent,
    CategoryListComponent
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
    CategoryListComponent
  ]
})
export class CategoryModule { }
