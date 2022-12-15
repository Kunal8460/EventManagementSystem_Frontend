import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from './Events';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url: string = "http://localhost:51215/api";
  event: Events[] = []
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

  createEvent(event: Events) {
    // console.log(event);
    return this.http.post<Events>(`${this.url}/EventMaster`, event)
  }

  getEvent(id: number) {
    return this.http.get(`${this.url}/EventMaster/${id}`)
  }


}
