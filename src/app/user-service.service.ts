import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url: string = "http://localhost:51215/api/";

  constructor(private http: HttpClient) { }

  logincreds = {
    toEmail: "kunaljadhav8460@gmail.com",
    subject: "",
    body: ""
  }
  login() {
    return this.http.post(`${this.url} + Email`, this.logincreds)
  }
}
