import { Component, OnInit } from '@angular/core';
import { Events } from '../Events';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  categories: any[] = [];
  createEventForm: FormGroup;
  event: Events = new Events()
  isLoggedIn: boolean = false
  username: string = ''
  constructor(private service: UserServiceService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.createEventForm = this.fb.group({
      eventId: this.event.eventId,
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

      this.username = localStorage.getItem('user') || ''
      this.activeRoute.params.subscribe((param) => {
        let id = param['id']
        this.service.getEvent(id).subscribe((data: any) => {
          this.event = data.data
        })

      })
      this.service.getCategories().subscribe((data: any) => {
        this.categories = data.data
      })
      console.log(localStorage.getItem("isLoggedIn"))
    } else {
      this.router.navigate([''])
    }
  }

  onUpdate() {
    this.createEventForm.value.categoryId = parseInt(this.createEventForm.value.categoryId)
    this.event = this.createEventForm.value
    this.event.customerEmail = this.username
    console.log(this.event);

    this.service.updateEvent(this.event.eventId, this.event).subscribe((data: any) => {
      this.router.navigate([`my-events/${this.username}`])
    })
  }

}
