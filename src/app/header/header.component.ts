import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string = ''
  isLoggedIn: boolean = false
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.username = localStorage.getItem('user') || ''
      this.isLoggedIn = true
    }
  }
  logout() {
    localStorage.clear();
    this.username = ''
    this.isLoggedIn = false
    this.router.navigate([''])
  }

}
