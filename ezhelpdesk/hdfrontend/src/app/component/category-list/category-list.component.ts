import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/entity/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categoryList: Category[] | undefined;
  
  constructor(private categoryService : CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllPatient().subscribe(
      data => 
        {this.categoryList = data;
        }
    );
  }



}
