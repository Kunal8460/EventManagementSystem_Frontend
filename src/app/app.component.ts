import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end'
  isLoggedIn: boolean = false
  isAdmin: boolean = false
  // @Input() isAdmin: boolean = false
  constructor(private router: Router) { }
  ngOnInit(): void {

    if (localStorage.getItem("isLoggedIn") == "true") {
      this.isLoggedIn = true
      if (localStorage.getItem('user') === "admin@admin.com") {
        this.isAdmin = true
      }
      console.log(localStorage.getItem("isLoggedIn"))
    } else {
      this.router.navigate([''])
    }
  }

}
