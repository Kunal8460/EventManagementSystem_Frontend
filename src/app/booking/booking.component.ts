import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../Booking';
import { Events } from '../Events';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  isLoggedIn: boolean = false
  username: string = ''
  bookings: any[] = []
  constructor(
    private router: Router,
    private service: UserServiceService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem("isLoggedIn") == "true") {
      this.isLoggedIn = true
      this.username = localStorage.getItem('user') || ''
    } else {
      this.router.navigate([''])
    }
    this.service.getMyBookings(this.username).subscribe((data: any) => {
      this.bookings = data
      console.log(this.bookings);
    })
  }
}

