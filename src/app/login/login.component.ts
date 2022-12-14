import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  singupUser: any[] = [];
  isOtp: boolean = false;
  loginObj: any = {
    Username: "",
    Password: ""
  };
  constructor(private ss: UserServiceService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  onSignUp() {
    // this.singupUser.push(this.signupObj)
    localStorage.setItem('singupUser', JSON.stringify(this.singupUser));
  }
  getOtp() {
    if (this.isOtp == false)
      this.isOtp = true;
  }
  onlogin() {
    this.ss.login().subscribe(() => {

    })
    this.router.navigate(['dashboard']);
  }

}
