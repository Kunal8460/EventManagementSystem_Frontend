import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserServiceService } from 'src/app/user-service.service';
import { ActivatedRoute, Router, } from '@angular/router';
import { EventCategory } from 'src/app/EventCategory';
@Component({
  selector: 'app-admin-create-category',
  templateUrl: './admin-create-category.component.html',
  styleUrls: ['./admin-create-category.component.css']
})
export class AdminCreateCategoryComponent implements OnInit {

  createCategoryForm: FormGroup;
  category: EventCategory = new EventCategory()
  constructor(
    private service: UserServiceService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.createCategoryForm = this.fb.group({
      categoryName: this.category.categoryName
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.createCategoryForm.value.categoryName)
    this.service.createCategory(this.createCategoryForm.value).subscribe((data: any) => {
      console.log(data.data);
      this.router.navigate(['admin-category'])
    })

  }

}
