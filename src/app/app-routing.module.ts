import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CalendarComponent } from "./calendar/calendar.component";
import { modalDialogComponent } from './modal-dialog/modal-dialog.component';

const routes: Routes = [
  { path: "plan", component: CalendarComponent },
  { path: "empolyees", component: modalDialogComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
// new object 