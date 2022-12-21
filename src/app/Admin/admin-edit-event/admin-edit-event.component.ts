import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Events } from 'src/app/Events';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-admin-edit-event',
  templateUrl: './admin-edit-event.component.html',
  styleUrls: ['./admin-edit-event.component.css']
})
export class AdminEditEventComponent implements OnInit {

  categories: any[] = [];
  editEventForm: FormGroup;
  event: Events = new Events()
  isLoggedIn: boolean = false
  // username: string = ''
  constructor(private service: UserServiceService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.editEventForm = this.fb.group({
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
      country: this.event.country,
      customerEmail: this.event.customerEmail

    })
  }


  ngOnInit(): void {
    if (localStorage.getItem("isLoggedIn") == "true") {
      this.isLoggedIn = true

      this.activeRoute.params.subscribe((param) => {
        let id = param['id']
        this.service.getEvent(id).subscribe((data: any) => {
          this.event = data.data
          console.log(this.event);

        })
      })
      this.service.getCategories().subscribe((data: any) => {
        this.categories = data.data
      })
    } else {
      this.router.navigate([''])
    }
  }

  onUpdate() {
    this.editEventForm.value.categoryId = parseInt(this.editEventForm.value.categoryId)
    this.event = this.editEventForm.value
    this.service.updateEvent(this.event.eventId, this.event).subscribe((data: any) => {
      this.router.navigate([`admin-browse-events`])
    })
  }

}
