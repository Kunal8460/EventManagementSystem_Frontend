import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from './Events';
import { Booking } from './Booking';
import { Search } from './Search';
import { EventCategory } from './EventCategory';
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
    return this.http.post<Events>(`${this.url}/EventMaster`, event)
  }

  getEvent(id: number) {
    return this.http.get(`${this.url}/EventMaster/${id}`)
  }

  getMyEvents(email: string) {
    return this.http.get(`${this.url}/EventMaster/MyEvents?email=${email}`)
  }

  updateEvent(id: any, event: Events) {
    return this.http.put(`${this.url}/EventMaster/${id}`, event)
  }

  deleteEvent(id: any) {
    return this.http.delete(`${this.url}/EventMaster/${id}`)
  }

  requestTicket(booking: Booking) {
    return this.http.post(`${this.url}/BookingMaster`, booking)
  }

  getMyBookings(email: string) {
    return this.http.get(`${this.url}/BookingMaster?email=${email}`)
  }

  searchEvents(searchObj: Search) {
    return this.http.post(`${this.url}/EventMaster/Search`, searchObj)
  }
  getAllCategories() {
    return this.http.get(`${this.url}/EventCategory`)
  }
  getCategory(id: any) {
    return this.http.get(`${this.url}/EventCategory/${id}`)
  }
  createCategory(category: EventCategory) {
    return this.http.post(`${this.url}/EventCategory/`, category)
  }
  editCategory(id: any, category: EventCategory) {
    return this.http.put(`${this.url}/EventCategory/${id}`, category)
  }
  deleteCategory(id: any) {
    return this.http.delete(`${this.url}/EventCategory/${id}`)
  }
}
