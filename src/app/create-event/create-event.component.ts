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
  category_id: number = 0;
  isLoggedIn: boolean = false

  constructor(private service: UserServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.createEventForm = this.fb.group({
      event_title: this.event.event_title,
      category_id: this.event.category_id,
      event_description: this.event.event_description,
      event_start_date: this.event.event_start_date,
      event_start_time: this.event.event_start_time,
      event_end_date: this.event.event_end_date,
      event_end_time: this.event.event_end_time,
      event_venue: this.event.event_venue,
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
    this.createEventForm.value.category_id = parseInt(this.createEventForm.value.category_id)
    console.log(this.createEventForm.value.category_id);

    let estartdate = new Date(this.createEventForm.value.event_start_date).toLocaleDateString()
    this.createEventForm.value.event_start_date = estartdate
    let esenddate = new Date(this.createEventForm.value.event_end_date).toLocaleDateString()
    this.createEventForm.value.event_end_date = esenddate

    // console.log(typeof (this.createEventForm.value.event_start_time))
    // console.log(date.toLocaleDateString())
    this.event = this.createEventForm.value
    // this.event.customerEmail = localStorage.getItem("user");
    this.service.createEvent(this.event).subscribe((data: any) => {
      console.log(data);
    })


  }

}
