import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from 'src/app/Events';
import { UserServiceService } from 'src/app/user-service.service';
@Component({
  selector: 'app-admin-browse-events',
  templateUrl: './admin-browse-events.component.html',
  styleUrls: ['./admin-browse-events.component.css']
})
export class AdminBrowseEventsComponent implements OnInit {

  eventData: any = []
  isLoggedIn: boolean = false
  isAdmin: boolean = false
  delEvent: Events = new Events()
  constructor(
    private router: Router,
    private service: UserServiceService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem("isLoggedIn") == "true") {
      // && localStorage.getItem('user') === "admin@admin.com") {
      this.isLoggedIn = true
      this.isAdmin = true
      this.service.getAllEvents().subscribe((data: any) => {
        this.eventData = data.data
        console.log(this.eventData);

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
      console.log(data);
      location.reload()
    })
  }

}
