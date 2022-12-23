import { Component, Input, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  isOtp: boolean = false;
  loginForm: FormGroup;
  disableBtn: boolean = false;
  isVerified: boolean = false
  isAdmin: boolean = false
  constructor(private ss: UserServiceService,
    private route: ActivatedRoute, private router: Router,
    private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      ToEmail: '',
      otp: ''
    })
  }

  isLoggedIn: boolean = false;
  ngOnInit(): void {

    if (localStorage.getItem("isLoggedIn") == "true") {
      this.isLoggedIn = true
      if (localStorage.getItem('user') === "cubeqnaforum@gmail.com") {
        this.isAdmin = true
      }
      console.log(localStorage.getItem("isLoggedIn"))
      this.router.navigate(['dashboard'])
    } else {
      this.router.navigate([''])
    }
  }
  getOtp() {
    if (this.isOtp == false) {

      this.ss.sendOtp(this.loginForm.value.ToEmail).subscribe(() => {
        this.isOtp = true;
        this.disableBtn = true;
      });
    }
  }
  onlogin() {
    this.ss.verifyOtp(this.loginForm.value.otp).subscribe((data: any) => {
      console.log(data);
      if (data == true) {
        this.isVerified = true
        this.isLoggedIn = true;
        localStorage.setItem("user", this.loginForm.value.ToEmail)
        localStorage.setItem("isLoggedIn", "true")
        setTimeout(() => {
          this.router.navigate(['dashboard']);
        }, 2000)
      }
    })
  }

}
