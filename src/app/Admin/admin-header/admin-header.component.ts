import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit, OnDestroy {

  isLoggedIn: boolean = false
  isAdmin: boolean = false
  constructor(
    private router: Router
  ) { }


  ngOnInit(): void {
    if (localStorage.getItem("isLoggedIn") == "true" && localStorage.getItem('user') === "cubeqnaforum@gmail.com") {
      this.isLoggedIn = true
      this.isAdmin = true
      console.log(localStorage.getItem("isLoggedIn"))
    } else {
      this.router.navigate([''])
    }
  }

  ngOnDestroy() {
    this.logout()
  }
  logout() {
    localStorage.clear();
    this.isAdmin = false
    this.isLoggedIn = false
    this.router.navigate([''])
  }

}
