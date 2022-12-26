import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/Booking';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html',
  styleUrls: ['./admin-booking.component.css']
})
export class AdminBookingComponent implements OnInit {

  bookings: any[] = []
  approveBooking: any
  constructor(private service: UserServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.service.getAllBookings().subscribe((data: any) => {
      this.bookings = data
    })
  }
  approve(id: any) {

    this.service.getBooking(id).subscribe((data: any) => {
      this.approveBooking = data
      this.approveBooking.status = "approved"
    })
  }
  onapprove() {
    console.log(this.approveBooking);

    // this.service.approveBooking(this.approveBooking.bookingId, this.approveBooking).subscribe((data: any) => {
    this.service.getPass(this.approveBooking).subscribe(() => {
      this.service.approveBooking(this.approveBooking.bookingId, this.approveBooking).subscribe((data: any) => {
        location.reload()
      })
    })
    // console.log(data);
    // })
  }

}
