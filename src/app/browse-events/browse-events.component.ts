import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-browse-events',
  templateUrl: './browse-events.component.html',
  styleUrls: ['./browse-events.component.css']
})
export class BrowseEventsComponent implements OnInit {

  eventList: any[] = [];
  categories: any[] = [];
  isLoggedIn: boolean = false
  constructor(private service: UserServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    if (localStorage.getItem("isLoggedIn") == "true") {
      this.isLoggedIn = true
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


}
