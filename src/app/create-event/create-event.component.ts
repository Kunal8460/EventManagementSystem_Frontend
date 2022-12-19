import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Events } from '../Events';
import { EventCategory } from '../EventCategory';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  categories: any[] = [];
  category: string = ''
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
      eventTitle: new FormControl(this.event.eventTitle, [Validators.required]),
      categoryId: new FormControl(this.event.categoryId, [Validators.required]),
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

  onSelectCategory(e: any) {
    this.category = e.target.value
    console.log(this.category);

  }
  onSubmit() {
    // console.log("Logged");

    this.createEventForm.value.categoryId = parseInt(this.createEventForm.value.categoryId)
    this.createEventForm.value.categoryId = parseInt(this.category)
    this.event = this.createEventForm.value
    // this.event.customerEmail = localStorage.getItem("user") || '';
    console.log(this.event);

    // this.service.createEvent(this.event).subscribe((data: any) => {
    //   this.router.navigate(['browse-events'])
    // })
  }

}
