import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from '../Events';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isLoggedIn: boolean = false
  events: Events[] = [];
  constructor(
    private router: Router,
    private service: UserServiceService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem("isLoggedIn") == "true") {
      this.isLoggedIn = true
    } else {
      this.router.navigate([''])
    }

    this.service.getAllEvents().subscribe((data: any) => {
      let arr = data.data
      this.events = arr.splice(0, 3)
      console.log(this.events)
    })
  }



}
