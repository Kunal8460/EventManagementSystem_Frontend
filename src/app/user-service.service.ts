import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url: string = "http://localhost:51215/api";

  constructor(private http: HttpClient) { }
  loginCreds = {};
  data = {};

  getCategories() {
    return this.http.get(`${this.url}/EventCategory`)
  }
  sendOtp(email: string) {
    this.loginCreds = {
      toEmail: email,
      subject: "OTP",
      body: ""
    }
    return this.http.post(`${this.url}/Email/Send`, this.loginCreds)
  }
  verifyOtp(verifyotp: any) {
    this.data = {
      otp: verifyotp
    }
    return this.http.post(`${this.url}/Email/GetData`, this.data);
  }

  getAllEvents() {
    return this.http.get(`${this.url}/EventMaster`)
  }
}
