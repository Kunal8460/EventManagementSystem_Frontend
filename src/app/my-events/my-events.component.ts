import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {
  isLoggedIn: boolean = false
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    if (localStorage.getItem("isLoggedIn") == "true") {
      this.isLoggedIn = true
      console.log(localStorage.getItem("isLoggedIn"))
    } else {
      this.router.navigate([''])
    }
  }

}
