import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from '../Events';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {
  isLoggedIn: boolean = false
  username: string = ''
  events: Events[] = []
  delEvent: Events = new Events()
  constructor(
    private router: Router,
    private service: UserServiceService
  ) { }

  ngOnInit(): void {

    if (localStorage.getItem("isLoggedIn") == "true") {
      this.isLoggedIn = true
      this.username = localStorage.getItem('user') || ''

      this.service.getMyEvents(this.username).subscribe((data: any) => {
        this.events = data
        console.log(this.events);

      })

    } else {
      this.router.navigate([''])
    }
  }
  onDel(id: any) {
    this.delEvent.eventId = id;
    console.log(this.delEvent.eventId);

  }
  deleteEvent() {
    this.service.deleteEvent(this.delEvent.eventId).subscribe((data: any) => {
      location.reload()
    })
  }

}
