import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingComponent } from './booking/booking.component';
import { ShowEventComponent } from './show-event/show-event.component';
import { BrowseEventsComponent } from './browse-events/browse-events.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from './user-service.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateEventComponent } from './create-event/create-event.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookingComponent,
    ShowEventComponent,
    BrowseEventsComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
