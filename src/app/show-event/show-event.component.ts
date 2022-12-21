import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Events } from '../Events';
import { Booking } from '../Booking';
import { NgLocalization } from '@angular/common';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.css']
})
export class ShowEventComponent implements OnInit {

  event: Events = new Events();
  isData: boolean = false
  username: string = ''
  isLoggedIn: boolean = false
  booking: Booking = new Booking()

  constructor(private activeRoute: ActivatedRoute,
    private service: UserServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    if (localStorage.getItem("isLoggedIn") == "true") {
      this.isLoggedIn = true
      this.username = localStorage.getItem('user') || ''
      this.activeRoute.params.subscribe((param) => {
        let id = param['id']
        this.service.getEvent(id).subscribe((data: any) => {
          this.isData = true
          this.event = data.data
          console.log(this.event)
        })
      })
      console.log(localStorage.getItem("isLoggedIn"))
    } else {
      this.router.navigate([''])
    }

    // this.activeRoute.params.subscribe((param) => {
    //   let id = param['id']
    //   this.service.getEvent(id).subscribe((data: any) => {
    //     this.isData = true
    //     this.event = data.data
    //     console.log(this.event)
    //   })
    // })
  }
  getQuantity(e: any) {
    this.booking.quantity = parseInt(e.target.value)
  }
  getPaymentDetails() {
    this.booking.eventId = this.event.eventId
    this.booking.customerEmail = this.username
    this.booking.status = "pending"
  }
  checkout() {
    this.service.requestTicket(this.booking).subscribe((data: any) => {
      // console.log(data);
      this.router.navigate(['booking'])
    })
    console.log(this.booking)
  }

}
