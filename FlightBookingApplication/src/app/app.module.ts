import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ManageAirlineComponent } from './manage-airline/manage-airline.component';
import UserService from './service/UserService';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { ManageDiscountComponent } from './manage-discount/manage-discount.component';
import { ManageSchedulesComponent } from './manage-schedules/manage-schedules.component';
import { ReportsComponent } from './reports/reports.component';
import BookingService from './service/BookingService';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import FlightListService from './service/FlightListService';
import { SearchResultsComponent } from './search-results/search-results.component';
import { UpdateScheduleComponent } from './update-schedule/update-schedule.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    ManageAirlineComponent,
    BookFlightComponent,
    BookingHistoryComponent,
    ManageBookingComponent,
    ManageDiscountComponent,
    ManageSchedulesComponent,
    ReportsComponent,
    SearchFlightComponent,
    SearchResultsComponent,
    UpdateScheduleComponent,
    CancelTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule  
  ],
  providers: [UserService,BookingService,FlightListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
