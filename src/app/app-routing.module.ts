import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { BrowseEventsComponent } from './browse-events/browse-events.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ShowEventComponent } from './show-event/show-event.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'show-event/:id', component: ShowEventComponent },
  { path: 'browse-events', component: BrowseEventsComponent },
  { path: 'booking', component: BookingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
