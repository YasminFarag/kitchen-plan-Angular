import { Component, OnInit, Injectable } from "@angular/core";
import { EmployeesService } from "../services/employees.service";

@Component({
  selector: "app-modal-dialog",
  templateUrl: "./modal-dialog.component.html",
  styleUrls: ["./modal-dialog.component.css"]
})
export class modalDialogComponent implements OnInit {
  public employees = [];
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
}
