import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatDialogModule } from "@angular/material/dialog";
import { modalDialogComponent } from "./modal-dialog/modal-dialog.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { EmployeesService } from './services/employees.service';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [AppComponent, modalDialogComponent, CalendarComponent],
  entryComponents: [modalDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
// A provider is an instruction to the Dependency Injection system on how to obtain a value for a dependency. Most of the time, these dependencies are services that you create and provide
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
