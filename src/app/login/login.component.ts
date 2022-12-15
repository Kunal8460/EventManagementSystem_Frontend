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
        this.isLoggedIn = true;
        sessionStorage.setItem("user", this.loginForm.value.ToEmail)
        sessionStorage.setItem("isLoggedIn", "true")
        this.router.navigate(['dashboard']);
      }
    })
  }

}
