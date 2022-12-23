import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserServiceService } from 'src/app/user-service.service';
import { ActivatedRoute, Router, } from '@angular/router';
import { EventCategory } from 'src/app/EventCategory';

@Component({
  selector: 'app-admin-edit-category',
  templateUrl: './admin-edit-category.component.html',
  styleUrls: ['./admin-edit-category.component.css']
})
export class AdminEditCategoryComponent implements OnInit {
  editCategoryForm: FormGroup;
  category: EventCategory = new EventCategory()
  constructor(
    private service: UserServiceService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.editCategoryForm = this.fb.group({
      categoryId: this.category.categoryId,
      categoryName: this.category.categoryName
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.service.getCategory(param['id']).subscribe((data: any) => {
        this.category = data.data
        console.log(this.category);

      })
    })
  }
  onEdit() {
    console.log(this.editCategoryForm.value)
    this.service.editCategory(this.category.categoryId, this.editCategoryForm.value).subscribe((data: any) => {
      console.log(data.data);
      this.router.navigate(['admin-category'])
    })

  }
}