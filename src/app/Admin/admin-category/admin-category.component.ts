import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventCategory } from 'src/app/EventCategory'; import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {

  categoryList: EventCategory[] = []
  id: any
  constructor(
    private service: UserServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getAllCategories().subscribe((data: any) => {
      this.categoryList = data.data
    })
  }
  onDel(id: any) {
    this.id = id
  }
  deleteCategory() {
    this.service.deleteCategory(this.id).subscribe((data: any) => {
      console.log(data.data);
      // this.router.navigate(['admin-categorylo'])lo
      location.reload()
    })
  }

}
