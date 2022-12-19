import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Search } from '../Search';
@Component({
  selector: 'app-browse-events',
  templateUrl: './browse-events.component.html',
  styleUrls: ['./browse-events.component.css']
})
export class BrowseEventsComponent implements OnInit {

  eventList: any[] = [];
  categories: any[] = [];
  isLoggedIn: boolean = false
  username: string = ''
  searchVal: Search = new Search();
  searchForm: FormGroup;

  constructor(private service: UserServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      catId: this.searchVal.catId,
      // sDate: this.searchVal.sDate,
      // eDate: this.searchVal.eDate
    })
  }

  ngOnInit(): void {

    if (localStorage.getItem("isLoggedIn") == "true") {
      this.isLoggedIn = true
      this.username = localStorage.getItem("user") || ''
      console.log(localStorage.getItem("isLoggedIn"))
    } else {
      this.router.navigate([''])
    }

    this.service.getCategories().subscribe((data: any) => {
      this.categories = data.data
      // console.log(this.categories.values)
    })
    this.service.getAllEvents().subscribe((data: any) => {
      this.eventList = data.data
      console.log(this.eventList)
      console.log(data)
    })
  }
  selectCategory(e: any) {
    this.searchForm.value.catId = parseInt(e.target.value)
  }
  search() {
    this.service.searchEvents(this.searchForm.value).subscribe((data: any) => {
      this.eventList = data
      this.eventList
    })
  }
  refresh() {
    this.service.getAllEvents().subscribe((data: any) => {
      this.eventList = data.data
    })
  }


}
