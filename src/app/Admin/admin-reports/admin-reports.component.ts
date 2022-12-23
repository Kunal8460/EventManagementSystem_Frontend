import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.css']
})
export class AdminReportsComponent implements OnInit {

  eventCount: number = 0
  categoryCount: number = 0
  bookingCount: number = 0
  constructor(
    private router: Router,
    private service: UserServiceService
  ) { }

  ngOnInit(): void {
    this.service.eventCount().subscribe((data: any) => {
      this.eventCount = data
    })
    this.service.categoryCount().subscribe((data: any) => {
      this.categoryCount = data
    })
    this.service.bookingCount().subscribe((data: any) => {
      this.bookingCount = data
    })

  }

}
