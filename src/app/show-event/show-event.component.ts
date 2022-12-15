import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Events } from '../Events';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.css']
})
export class ShowEventComponent implements OnInit {

  event: Events = new Events();
  isData: boolean = false
  constructor(private activeRoute: ActivatedRoute,
    private service: UserServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((param) => {
      let id = param['id']
      this.service.getEvent(id).subscribe((data: any) => {
        this.isData = true
        this.event = data.data
        console.log(this.event)
      })
    })
  }
  checkout() {
    // alert("You will get your tickets via mail as soon as your request is approved! ")
  }

}
