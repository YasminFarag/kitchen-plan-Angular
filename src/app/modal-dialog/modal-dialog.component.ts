import { Component, OnInit, Injectable } from "@angular/core";
import { EmployeesService } from "../services/employees.service";

@Component({
  selector: "app-modal-dialog",
  templateUrl: "./modal-dialog.component.html",
  styleUrls: ["./modal-dialog.component.css"]
})
export class modalDialogComponent implements OnInit {
  public employees: any = [];
  //showModal :boolean= true

  constructor(private _employeesService: EmployeesService) {}

  /* toggleModal() :void {
    this.showModal = !this.showModal
  } */

  ngOnInit(): void {
    this._employeesService
      .emplyeeData()
      .subscribe(data => (this.employees = data));

    // convert to JSON

    /*  this.stringfiedData = JSON.stringify(this.myData);
      console.log('stringfied ', this.stringfiedData) */
  }

  change(employee) {
    this.employees.find(element => {
      return element.id == employee.id;
    }).status = "Avaliable";
    /* if (status === "Avaliable") {
      return "out of office";
    } else if (status === "out of office") {
      return "Avaliable";
    } */
  }
}
