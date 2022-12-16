import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Events } from '../Events';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  categories: any[] = [];
  createEventForm: FormGroup;
  event: Events = new Events()
  // categoryId: number = 0;
  isLoggedIn: boolean = false

  constructor(private service: UserServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.createEventForm = this.fb.group({
      eventTitle: this.event.eventTitle,
      categoryId: this.event.categoryId,
      eventDescription: this.event.eventDescription,
      eventStartDate: this.event.eventStartDate,
      eventStartTime: this.event.eventStartTime,
      eventEndDate: this.event.eventEndDate,
      eventEndTime: this.event.eventEndTime,
      eventVenue: this.event.eventVenue,
      city: this.event.city,
      state: this.event.state,
      country: this.event.country

    })
  }

  ngOnInit(): void {


    if (localStorage.getItem("isLoggedIn") == "true") {
      this.isLoggedIn = true
      console.log(localStorage.getItem("isLoggedIn"))
    } else {
      this.router.navigate([''])
    }

    this.service.getCategories().subscribe((data: any) => {
      this.categories = data.data
    })
  }

  onSubmit() {
    console.log(this.createEventForm.value)
    this.createEventForm.value.categoryId = parseInt(this.createEventForm.value.categoryId)
    console.log(this.createEventForm.value.categoryId);

    let estartdate = new Date(this.createEventForm.value.eventStartDate).toLocaleDateString()
    this.createEventForm.value.eventStartDate = estartdate
    let eenddate = new Date(this.createEventForm.value.eventEndDate).toLocaleDateString()
    this.createEventForm.value.eventEndDate = eenddate

    // console.log(typeof (this.createEventForm.value.event_start_time))
    // console.log(date.toLocaleDateString())
    this.event = this.createEventForm.value
    this.event.customerEmail = localStorage.getItem("user") || '';
    this.service.createEvent(this.event).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['browse-events'])
    })


  }

}
