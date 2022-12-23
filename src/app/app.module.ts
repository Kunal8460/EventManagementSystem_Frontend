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
import { MyEventsComponent } from './my-events/my-events.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { AdminHeaderComponent } from './Admin/admin-header/admin-header.component';
import { AdminBrowseEventsComponent } from './Admin/admin-browse-events/admin-browse-events.component';
import { AdminEditEventComponent } from './Admin/admin-edit-event/admin-edit-event.component';
import { AdminCategoryComponent } from './Admin/admin-category/admin-category.component';
import { AdminEditCategoryComponent } from './Admin/admin-edit-category/admin-edit-category.component';
import { AdminReportsComponent } from './Admin/admin-reports/admin-reports.component';
import { AdminCreateCategoryComponent } from './Admin/admin-create-category/admin-create-category.component';

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
    CreateEventComponent,
    MyEventsComponent,
    NotFoundComponent,
    EditEventComponent,
    AdminHeaderComponent,
    AdminBrowseEventsComponent,
    AdminEditEventComponent,
    AdminCategoryComponent,
    AdminEditCategoryComponent,
    AdminReportsComponent,
    AdminCreateCategoryComponent
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
