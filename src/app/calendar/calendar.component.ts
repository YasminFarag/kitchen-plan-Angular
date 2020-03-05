import { Component, OnInit } from "@angular/core";
import { WeekdaysService } from "../services/weekdays.service";
import { EmployeesService } from "../services/employees.service";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"],
  providers: [EmployeesService]
})
export class CalendarComponent implements OnInit {
  today: number = Date.now();
  public weeks = [];
  public days = [];
  public employees = [];
  public filteredEmployee = [];

  public calculate: number;

  public employeeCopy = [];
  public newEmploy = [];

  public finishedEmployeeArray = [];
  public lastResult = [];
  // injected both services in a one to combine and get all data from both json files
  constructor(
    private _WeekdaysService: WeekdaysService,
    private _EmployeesService: EmployeesService
  ) {}

  employeeData() {
    this._EmployeesService.emplyeeData().subscribe(data => {
      this.employees = data;
      // filter the employees to get only the available
      this.filteredEmployee = this.employees.filter(
        item2 => item2.status === "Avaliable"
      );

      this.calculate = this.weeks.length - this.filteredEmployee.length;
      // takes a copy from the filtered employee
      this.employeeCopy = this.filteredEmployee.slice();
      // splice() changes the original array, returns the removed items in the array
      this.newEmploy = this.employeeCopy.splice(0, this.calculate);
      //merg two arrays in one array through the spread operator
      this.finishedEmployeeArray = [
        ...this.filteredEmployee,
        ...this.newEmploy
      ];
      // iterate through the map method it returns the data for both week days and employees dtat
      this.lastResult = this.weeks.map((item, i) => {
        item.name = this.finishedEmployeeArray[i].name;

        return item;
      });

      console.log("filtered", this.filteredEmployee);
      console.log("subtracting ", this.calculate);
      console.log("filtered :", this.filteredEmployee);
      console.log(this.weeks);
      console.log("employess copy : ", this.employeeCopy);
      console.log("new Employee Array", this.newEmploy);
      console.log("finished Array", this.finishedEmployeeArray);
      console.log("lastResult", this.lastResult);
    });
  }
  ngOnInit(): void {
    this._WeekdaysService.getWeekDays().subscribe(day => {
      this.weeks = day;
      //this.days= this.weeks[0]
      this.days.push(this.weeks[0]);
    });

    this.employeeData();
  }
}
