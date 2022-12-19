import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck, OnDestroy {

  username: string = ''
  isLoggedIn: boolean = false
  constructor(
    private router: Router
  ) { }

  ngDoCheck() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.isLoggedIn = true
      this.username = localStorage.getItem('user') || ''
    }
  }
  ngOnInit(): void {

  }
  ngOnDestroy() {
    this.logout()
  }
  logout() {
    localStorage.clear();
    this.username = ''
    this.isLoggedIn = false
    this.router.navigate([''])
  }

}
